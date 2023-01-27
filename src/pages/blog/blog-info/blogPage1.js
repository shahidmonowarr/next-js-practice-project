import Head from "next/head";
import Link from "next/link";

const blogPage1 = () => {
  return (
    <div>
        <Head>
                <title>Blog Page 1</title>
            </Head>
      <h2>nested blog 1</h2>
      <Link href="/blog/blog-info/blogPage2">
        <button>Blog page 2</button>
      </Link>
    </div>
  );
};

export default blogPage1;
