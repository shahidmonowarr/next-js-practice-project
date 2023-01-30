import Banner from "@/Components/Banner/Banner";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog Home</title>
      </Head>

      <div className="text-center">
        <Header />
        <Banner />
        <h1 className="text-3xl font-bold">Hello, Mr. Reader</h1>
          <button>Welcome to our Website</button>
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
        className="mx-auto mb-10"
        src="/marketing.jpg"
        width={400}
        height={400}
      ></Image>
      <Footer />
    </div>
  );
}
