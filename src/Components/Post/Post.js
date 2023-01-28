import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="card my-10 mx-10 bg-base-100 shadow-xl">
      <div className="card-body bg-success border-secondary rounded-lg">
        <h2 className="card-title text-2xl text-bold hover:text-orange-900 uppercase">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <Link href={`/posts/${post.id}`}>
          <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
