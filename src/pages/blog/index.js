import Link from "next/link";

const Blog = () => {
    return (
        <div>
            <h1>Let's Read blogs</h1>
            <Link href="/blog/blog1">
        <button>Blog1</button>
      </Link>
        </div>
    );
};

export default Blog;