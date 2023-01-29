import Comment from "@/Components/Comment/Comment";


const Comments = ({comments}) => {
    console.log(comments);
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>
                )

            }
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    return {
        props: {
            comments: data
        }
    }
}