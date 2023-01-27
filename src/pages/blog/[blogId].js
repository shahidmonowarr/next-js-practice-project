import { useRouter } from 'next/router';

const blogId = () => {
    const router = useRouter();
    const id    = router.query.blogId;
    return (
        <div>
            <h2>THis is blog {id}</h2>
        </div>
    );
};

export default blogId;