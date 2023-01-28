import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Home</title>
      </Head>

      <div className="text-center mt-3">
        <h1 className="text-3xl ">Hello, Mr. Reader</h1>
        <Link href="/blog">
          <button>Blog</button>
        </Link>
        <br />
        <br />
        <Link href="/blog">
          <button className="btn btn-primary mr-10">Blogs</button>
        </Link>
        <Link href="/posts">
          <button className="btn btn-accent mx-auto">Posts</button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <Image
        className="mx-auto"
        src="/marketing.jpg"
        width={400}
        height={400}
      ></Image>
    </div>
  );
}
