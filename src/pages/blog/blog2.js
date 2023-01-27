import Head from "next/head";
import Link from "next/link";

const blog2 = () => {
  return (
    <div>
        <Head>
                <title>Blog 2</title>
            </Head>
      <p>
        The country is also known for its natural beauty, including the world's
        largest mangrove forest, the Sundarbans, and the Cox's Bazar beach which
        is the longest unbroken sea beach in the world. Bangladesh has a rich
        history, with a past that includes the British colonial era, the 1971
        war of independence from Pakistan and the contributions of famous
        figures such as Sheikh Mujibur Rahman, the founding father of
        Bangladesh.
      </p>
      <Link href="/blog/blog-info/blogPage1">
        <button>Blog page 1</button>
      </Link>
      <br/>
      <br/>
      <Link href="/blog/blog3">
        <button>Blog page 3</button>
      </Link>
    </div>
  );
};

export default blog2;
