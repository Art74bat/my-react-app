import { useContext, useEffect, useState } from "react";
import style from "../../css/AdminTeam.module.css";
import { getTeams } from "../../getData";
import { AppContext } from "../../../Context/AppContext";
import TeamItem from "./TeamItem";

export default function AdminTeam() {
    const { token } = useContext(AppContext);
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [second_name, setSecondName] = useState("");
    const [experience, setExperience] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [team, setTeam] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert('Пожалуйста, выберите файл');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('second_name', second_name);
        formData.append('experience', experience);
        formData.append('image', file);

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('https://artbatochir.ru/api/team', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Ошибка при загрузке файла');
            }

            const result = await response.json();
            setSuccess(true);
            console.log('Файл успешно загружен:', result);

            // Очищаем форму
            setName('');
            setSecondName('');
            setExperience('');
            setFile(null);

            // Обновляем список работников
            await loaderTeam();
        } catch (err) {
            setError(err.message);
            console.error('Ошибка:', err);
        } finally {
            setLoading(false);
        }
    };

    async function loaderTeam() {
        try {
            const data = await getTeams();
            setTeam(data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            setError('Не удалось загрузить данные');
        }
    }

    async function deleteTeam(id) {
        try {
            const res = await fetch(`/api/team/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!res.ok) {
                throw new Error('Ошибка при удалении');
            }

            const data = await res.json();
            alert(data.message);

            // Обновляем состояние
            setTeam(team.filter(item => item.id !== id));
        } catch (error) {
            console.error('Ошибка:', error);
            setError('Не удалось удалить работника');
        }
    }

    async function handleUpdate(id) {
        try {
            const item = team.find(item => item.id === id);
            if (!item) {
                throw new Error('Работник не найден');
            }

            const formData = {
                name: item.name,
                second_name: item.second_name,
                experience: item.experience,
            };

            const res = await fetch(`/api/team/${id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Ошибка при обновлении');
            }

            const data = await res.json();
            alert(data.message);

            // Обновляем состояние
            const updatedTeam = team.map(item =>
                item.id === id ? { ...item, ...formData } : item
            );
            setTeam(updatedTeam);
        } catch (error) {
            console.error('Ошибка:', error);
            setError('Не удалось обновить данные');
        }
    }

    function editItem(id, name, event) {
        setTeam(
            team.map((item) => {
                if (item.id === id) {
                    item[name] = event.target.value;
                }
                return item;
            })
        );
    }

    useEffect(() => {
        loaderTeam();
    }, []);

    const out = team.map((item) => (
        <TeamItem
            key={item.id}
            item={item}
            editItem={editItem}
            deleteTeam={deleteTeam}
            handleUpdate={handleUpdate}
        />
    ));

    return (
        <>
            <h3 className={style.title}>Добавить работника</h3>
            <div className="employes">
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>Файл успешно загружен!</p>}
                <form onSubmit={handleSubmit} className={style.form}>
                    <label className={style.form__label}>
                        <span>Имя* :</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={style.form__input}
                        />
                    </label>

                    <label className={style.form__label}>
                        <span>Фамилия* :</span>
                        <input
                            type="text"
                            name="second_name"
                            placeholder="Фамилия"
                            value={second_name}
                            onChange={(e) => setSecondName(e.target.value)}
                            className={style.form__input}
                        />
                    </label>

                    <label className={style.form__label}>
                        <span>Опыт работы* :</span>
                        <input
                            type="text"
                            name="experience"
                            placeholder="Опыт работы"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className={style.form__input}
                        />
                    </label>

                    <label className={style.form__label}>
                        <span>Загрузить Фото* :</span>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className={style.form__input}
                            accept="image/*"
                        />
                    </label>

                    <button type="submit" className={style.form__btn} disabled={loading}>
                        {loading ? 'Загрузка...' : 'Отправить'}
                    </button>
                </form>

                <h3 className={style.title}>Список работников</h3>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Опыт работы</th>
                            <th>Дополнительно</th>
                        </tr>
                    </thead>
                    <tbody>
                        {out}
                    </tbody>
                </table>
            </div>
        </>
    );
}