import { useContext, useEffect, useState } from "react";
import style from "../../css/Admin.module.css";
import { getPosts } from "../../getData";
import { AppContext } from "../../../Context/AppContext";

function PostItem({ post, addPart }) {
    return (
        <div>
            <p>{post.id} {post.title}</p>
            <p>{post.images}</p>
            <button onClick={() => addPart(post.id)}>Добавить Раздел</button>
        </div>
    );
}

export default function DelPost() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AppContext);

    // Состояния для формы
    const [partTitle, setPartTitle] = useState("");
    const [partBody, setPartBody] = useState("");
    const [selectedPostId, setSelectedPostId] = useState(null);

    // Загрузка постов
    async function loaderPosts() {
        setLoading(true);
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
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

    // Функция для выбора поста
    const addPartPost = (id) => {
        setSelectedPostId(id); // Устанавливаем ID выбранного поста
    };

    // Обработчик для добавления раздела
    const handleAddPart = async () => {
        if (!selectedPostId || !partTitle || !partBody) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        try {
            const response = await fetch(`/api/bodies/${selectedPostId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    sub_title: partTitle,
                    body: partBody,
                }),
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении раздела");
            }

            const result = await response.json();
            console.log("Раздел успешно добавлен:", result);

            // Очищаем форму
            setPartTitle("");
            setPartBody("");
            setSelectedPostId(null);

            // Обновляем список постов
            await loaderPosts();
        } catch (error) {
            console.error("Ошибка:", error);
            setError("Не удалось добавить раздел");
        }
    };

    // Отображение постов
    const out = posts.map((item) => <PostItem key={item.id} post={item} addPart={addPartPost} />);

    if (loading) return <p>Загрузка...</p>;
    if (posts.length === 0 && !loading) return <p>Постов нет.</p>;

    return (
        <>
            <h2 className={style.title}>Добавить раздел</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {out}

            {/* Форма для добавления раздела */}
            {selectedPostId && (
                <div>
                    <h3>Добавить раздел к посту {selectedPostId}</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>
                            Заголовок раздела:
                            <input
                                type="text"
                                value={partTitle}
                                onChange={(e) => setPartTitle(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Текст раздела:
                            <textarea
                                value={partBody}
                                onChange={(e) => setPartBody(e.target.value)}
                                required
                            />
                        </label>
                        <button onClick={handleAddPart}>Добавить раздел</button>
                    </form>
                </div>
            )}
        </>
    );
}