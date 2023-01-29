

const Comment = ({comment}) => {
    return (
        <div className="card my-10 mx-10 bg-base-100 shadow-xl">
      <div className="card-body bg-accent border-secondary rounded-lg">
        <h2 className="card-title text-2xl text-bold hover:text-orange-900 uppercase">Name: {comment.name}</h2>
        <h4 className="card-title text-2xl text-bold hover:text-red-600 lowercase">email: {comment.email}</h4>
        <p>Comment: {comment.body}</p>
      </div>
    </div>
    );
};

export default Comment;