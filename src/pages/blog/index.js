import Head from "next/head";
import Link from "next/link";

const Blog = () => {
    return (
        <div>
            <Head>
                <title>Blog1</title>
            </Head>
            <h1>Let's Read blogs</h1>
            <Link href="/blog/blog1">
        <button>Blog1</button>
      </Link>
        </div>
    );
};

export default Blog;