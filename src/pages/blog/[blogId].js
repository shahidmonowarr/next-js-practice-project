import Head from 'next/head';
import { useRouter } from 'next/router';

const blogId = () => {
    const router = useRouter();
    const id    = router.query.blogId;
    return (
        <div>
            <Head>
                <title>{id}</title>
            </Head>
            <h2>THis is blog {id}</h2>
        </div>
    );
};

export default blogId;