// создать пост в блоге на сайте

import { useContext, useEffect, useState } from "react";
// import style from "../../css/Admin.module.css";
import { getPosts } from "../../getData";
import { AppContext } from "../../../Context/AppContext";
import style from "../../css/PostAdminForm.module.css";

function PostItem({ post,deletePost }) {
    return (
        <div className={style.block}>
            <p className={style.sub_title}>{post.id} {post.title}</p>
            <img className={style.image} src={post.images} alt="picture" />
            <button className={style.form__btn} onClick={()=>deletePost(post.id)}>Удалить</button>
        </div>
    );
}

export default function DelPost () {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {token} = useContext(AppContext);
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

    // Функция для удаления поста
    const deletePost = async (id) => {
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Ошибка при удалении поста');
            }

            const result = await response.json();
            console.log(result.message);

            // Обновляем состояние, удаляя пост из списка
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Ошибка:', error);
            setError('Не удалось удалить пост');
        }
    };
 
    // Отображение постов
    const out = posts.map((item) => <PostItem key={item.id} post={item} deletePost={deletePost} />);

    if (loading) return <p>Загрузка...</p>;
    if (posts.length === 0 && !loading) return <p className={style.message}>Постов нет.</p>;

    return (
        <>
            <h2 className={style.title}>Удалить Пост</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {out}
        </>
    )
}