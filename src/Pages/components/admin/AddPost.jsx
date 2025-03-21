import React, { useContext, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
// import style from "../../css/Register.module.css";
import style from "../../css/PostAdminForm.module.css";

export default function AddPostForm() {
    const { token } = useContext(AppContext);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState(null);
    // const [isImportant, setIsImportant] = useState(false); // Состояние для checkbox
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
        // formData.append("is_important", isImportant); // Добавляем значение checkbox

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("https://artbatochir.ru/api/posts", {
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
            // setIsImportant(false); // Сбрасываем checkbox
        } catch (err) {
            setError(err.message);
            console.error("Ошибка:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className={style.title}>Добавить пост</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>Пост успешно добавлен!</p>}
            <form onSubmit={handleSubmit} className={style.form}>
                {/* Поле для заголовка */}
                <label className={style.form__label}>
                    Заголовок*:
                    <input   className={style.form__input}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>

                {/* Поле для подзаголовка */}
                <label className={style.form__label}>
                    Подзаголовок:
                    <input className={style.form__input}
                        type="text"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                    />
                </label>

                {/* Поле для основного текста */}
                <label className={style.form__label}>
                    Текст поста*:
                    <textarea
                        className={style.form__input}
                        rows="4"
                        cols="50"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </label>

                {/* Поле для загрузки изображения */}
                <label className={style.form__label}>
                    Изображение*:
                    <input className={style.form__input}
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                    />
                </label>

                {/* Checkbox для важного поста */}
                {/* <label>
                    Важный пост:
                    <input
                        type="checkbox"
                        checked={isImportant}
                        onChange={(e) => setIsImportant(e.target.checked)}
                    />
                </label> */}

                {/* Кнопка отправки формы */}
                <button type="submit" disabled={loading} className={style.form__btn}>
                    {loading ? "Отправка..." : "Добавить пост"}
                </button>
            </form>
        </div>
    );
}