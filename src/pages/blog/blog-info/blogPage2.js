import Head from "next/head";
import Link from "next/link";


const blogPage2 = () => {
    return (
        <div>
            <Head>
                <title>Blog Page 2</title>
            </Head>
            <h2>nested blog 2</h2>
            <Link href="/">
        <button>Home</button>
      </Link>
        </div>
    );
};

export default blogPage2;