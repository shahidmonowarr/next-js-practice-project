import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
    
    const router = useRouter();
    const handleBack = () => {
        router.push('/posts')
    }

  return (
    <div className="card w-96 mx-auto mt-10 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title text-1xl">Title: {post?.id}</h2>
        <h2 className="card-title text-3xl">Title: {post.title}</h2>
        <p>Post: {post.body}</p>
        <button onClick={handleBack} className="btn btn-success">Back to Posts</button>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
