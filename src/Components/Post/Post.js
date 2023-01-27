const Post = ({ post }) => {
  return (
    <div className="card mt-10 mx-10 bg-base-100 shadow-xl">
      <div className="card-body bg-success border-secondary rounded-lg">
        <h2 className="card-title text-2xl text-bold">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
