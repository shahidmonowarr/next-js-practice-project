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
      <h1>Hello, Mono</h1>
      <Link href="/blog">
        <button>Blog</button>
      </Link>
      <br />
      <br />
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
      <br />
      <br />
      <br />
      <Image src="/marketing.jpg" width={400} height={400}></Image>
    </div>
  );
}
