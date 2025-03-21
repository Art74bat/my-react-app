import { Link} from "react-router-dom";
import { getPosts } from "../getData";
import { useEffect, useState } from "react";
import style from "../css/Blog.module.css"
function PostItem({ post }) {
    return (
        <div className={style.card}>
            {/* <p>{post.images}</p> */}
            <img className={style.img} src={post.images} alt="picture" />
            <Link className={style.link} to={`posts/${post.id}`}>{post.title}</Link>
        </div>
    );
}

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Загрузка постов
    async function loaderPosts() {
        setLoading(true);
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            setError(`Не удалось загрузить данные: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
            await loaderPosts();
        })();
    }, []);
 
    // Отображение постов
    const out = posts.map((item) => <PostItem key={item.id} post={item} />);

    if (loading) return <p>Загрузка...</p>;
    if (posts.length === 0 && !loading) return <p>Постов нет.</p>;

    return (
        <>
            <h1 className={style.title}>Блог</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className={style.container}>
                {out}
            </div>
        </>
    );
}