import Link from "next/link";

const blog1 = () => {
    return (
        <div>
            <h2>Bangladesh is a country located in South Asia, bordered by India and Myanmar. With a population of over 160 million people, it is the 8th most populous country in the world. The official language is Bengali and the currency is the Bangladeshi taka. The country has a diverse culture, with influences from Hinduism, Buddhism, and Islam.</h2>
            <Link href="/blog/blog2">
        <button>Blog 2</button>
      </Link>
        </div>
    );
};

export default blog1;