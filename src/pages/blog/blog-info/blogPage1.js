import Link from "next/link";

const blogPage1 = () => {
  return (
    <div>
      <h2>nested blog 1</h2>
      <Link href="/blog/blog-info/blogPage2">
        <button>Blog page 2</button>
      </Link>
    </div>
  );
};

export default blogPage1;
