import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../getData";

function PostItem({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <div>
                {post.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Изображение ${index + 1}`}
                        style={{ width: '100px', height: 'auto', margin: '5px' }}
                    />
                ))}
            </div>
            <section>{post.body.map((item,index)=>(
                <div key={index}>
                    <h2>{item.sub_title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}</section>

        </div>
    );
}

export default function Post() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    // Загрузка поста
    async function loaderPost() {
        setLoading(true);
        try {
            const data = await getPost(id);
            if (!data) {
                throw new Error('Пост не найден');
            }
            setPost(data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            setError(`Не удалось загрузить данные: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
            await loaderPost();
        })();
    }, [id]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!post) return <p>Пост не найден.</p>;

    return (
        <>
            <h1>Информация о посте с ID: {id}</h1>
            <PostItem post={post} />
        </>
    );
}