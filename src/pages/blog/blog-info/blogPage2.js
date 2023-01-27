import Link from "next/link";


const blogPage2 = () => {
    return (
        <div>
            <h2>nested blog 2</h2>
            <Link href="/">
        <button>Home</button>
      </Link>
        </div>
    );
};

export default blogPage2;