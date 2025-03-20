import React, { useContext, useState } from "react";
import { AppContext } from "../../../Context/AppContext";

export default function AddPostForm() {
    const { token } = useContext(AppContext);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState(null);
    const [isImportant, setIsImportant] = useState(false); // Состояние для checkbox
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Обработчик изменения файла
    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Получаем выбранный файл
    };

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверка на заполнение обязательных полей
        if (!title || !body || !image) {
            alert("Пожалуйста, заполните все обязательные поля и выберите изображение.");
            return;
        }

        // Создаем FormData для отправки файла
        const formData = new FormData();
        formData.append("title", title);
        formData.append("sub_title", subTitle);
        formData.append("body", body);
        formData.append("image", image);
        formData.append("is_important", isImportant); // Добавляем значение checkbox

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/posts", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData, // Отправляем FormData
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении поста");
            }

            const result = await response.json();
            setSuccess(true);
            console.log("Пост успешно добавлен:", result);

            // Очищаем форму после успешной отправки
            setTitle("");
            setSubTitle("");
            setBody("");
            setImage(null);
            setIsImportant(false); // Сбрасываем checkbox
        } catch (err) {
            setError(err.message);
            console.error("Ошибка:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Добавить пост</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>Пост успешно добавлен!</p>}
            <form onSubmit={handleSubmit}>
                {/* Поле для заголовка */}
                <label>
                    Заголовок*:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>

                {/* Поле для подзаголовка */}
                <label>
                    Подзаголовок:
                    <input
                        type="text"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                    />
                </label>

                {/* Поле для основного текста */}
                <label>
                    Текст поста*:
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </label>

                {/* Поле для загрузки изображения */}
                <label>
                    Изображение*:
                    <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                    />
                </label>

                {/* Checkbox для важного поста */}
                <label>
                    Важный пост:
                    <input
                        type="checkbox"
                        checked={isImportant}
                        onChange={(e) => setIsImportant(e.target.checked)}
                    />
                </label>

                {/* Кнопка отправки формы */}
                <button type="submit" disabled={loading}>
                    {loading ? "Отправка..." : "Добавить пост"}
                </button>
            </form>
        </div>
    );
}