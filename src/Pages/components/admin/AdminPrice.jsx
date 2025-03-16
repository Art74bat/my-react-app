import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
// import { getHard, getSoft } from "../../getData";
import style from "../../css/AdminPrice.module.css"



export default function AdminPrice () {
    const {token} =useContext(AppContext);
    const [errors,setErrors] = useState([]);
    const [hard,setHard] = useState([]);
    const [soft,setSoft] = useState([]);
    const [corp,setCorp] = useState([]);
    const [formData,setFormData] = useState({
        category:'',
        title:'',
        sub_title:'',
        description:'',
        price:'',
    })

    // заполнить для отправки данных
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    useEffect(() => {
        // Загружаем данные 
        const fetchHard = async () => {
            const res =await fetch('/api/hards');
            const data = await res.json();
          setHard(data);
        };
        const fetchSoft = async () => {
            const res =await fetch('/api/softs');
            const data = await res.json();
          setSoft(data);
        };
        const fetchCorp = async () => {
            const res =await fetch('/api/corporate');
            const data = await res.json();
          setCorp(data);
        };
    
        fetchHard();
        fetchSoft();
        fetchCorp();
      }, []);

    // сортировать по категориям и создать объект по категориям {ключ: объект}
    const HardGroupedObject = hard.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Создаем массив для каждой категории
        }
        acc[item.category].push(item); // Добавляем объект в соответствующую категорию
        return acc;
      }, {});
      
    // сортировать по категориям и создать объект  {ключ: объект}...преобразовать в массив
    const SoftGroupedObject = soft.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Создаем массив для каждой категории
        }
        acc[item.category].push(item); // Добавляем объект в соответствующую категорию
        return acc;
    }, {});

    // сортировать по категориям и создать объект  {ключ: объект}...преобразовать в массив
    const CorpGroupedObject = corp.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Создаем массив для каждой категории
        }
        acc[item.category].push(item); // Добавляем объект в соответствующую категорию
        return acc;
    }, {});

    // сождать новую запись
    async function createItem (item,token) {
            let route = item[0].route
                // Объединяем данные формы и дополнительные данные
            const pushData = {
                ...formData,
                route,
            };
            console.log(pushData);
            // обновить запись в базе
            const res =await fetch(`/api/${route}`,{
                method:'post',
                headers:{
                    Authorization:`Bearer ${token}`
                },
                // парсить данные из типа форм-даты
                body: JSON.stringify(pushData),
            });
    
            // сохранить в json
            const data = await res.json();
            // если данные с ошибкой
            if(data.errors){
                setErrors(data.errors);
            }
            alert(data.message);
            window.location.reload()        
    }
    
    // вывести данные на страницу
    function renderHardPriceList (prices) {
        // объект в массив...
        const entriesArray = Object.entries(prices)
        if (!prices || prices.lenght === 0) {
          return <p className={style.error}>No data found.</p>; // Если ничего нет, выводим сообщение
        }      
          return (
            <tbody className={style.section}>
            {entriesArray.map((items, index) => (
                <React.Fragment key={index}>
                {/* Заголовок категории */}
                <tr>
                    <td><span className={style.table_title}>Категория:</span> {items[0]}</td>
                </tr>

                {/* Строки с данными */}
                {items[1].map((item) => (
                    <tr key={item.id} className={style.form_wrapp}>
                    <td><span className={style.table_title}>Описание: </span>{item.description}</td>
                    <td><span className={style.table_title}>Устройство: </span>{item.title}</td>
                    <td><span className={style.table_title}>Модель: </span>{item.sub_title}</td>
                    <td><span className={style.table_title}>Цена:</span> {item.price}</td>
                    <td>
                        <button
                        className={style.btn}
                        onClick={() => deleteItem(item.id, token, item.route)}>
                        Удалить
                        </button>
                    </td>
                    </tr>
                ))}

                {/* Форма для добавления новой записи */}
                <tr className={style.form_wrapp}>
                    <td className={style.form}>
                    <input
                        className={style.form_input}
                        type="text"
                        name="category"
                        placeholder="Категория*"
                        onChange={handleChange}
                    />
                    </td>
                    <td className={style.form}>
                        <input
                            className={style.form_input}
                            type="text"
                            name="title"
                            placeholder="Устройство*"
                            onChange={handleChange}
                        />
                    </td>
                    <td className={style.form}>
                        <input
                            className={style.form_input}
                            type="text"
                            name="sub_title"
                            placeholder="Модель*"
                            onChange={handleChange}
                        />
                    </td>
                    <td className={style.form}>
                        <input
                            className={style.form_input}
                            type="text"
                            name="description"
                            placeholder="Описание*"
                            onChange={handleChange}
                        />
                    </td>
                    <td className={style.form}>
                        <input
                            className={style.form_input}
                            type="text"
                            name="price"
                            placeholder="Цена*"
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <button
                            className={style.btn}
                            onClick={() => createItem(items[1], token)}
                        >
                            Добавить
                        </button>
                    </td>
                </tr>
                </React.Fragment>
            ))}
            </tbody>
          );
    };
    // вывести данные на страницу
    function renderSoftPriceList (prices) {
        // объект в массив...
        const entriesArray = Object.entries(prices)
        if (!prices || prices.lenght === 0) {
          return <p className={style.error}>No data found.</p>; // Если ничего нет, выводим сообщение
        }      
          return (
            <tbody className={style.section}>
            {entriesArray.map((items, index) => (
                <React.Fragment key={index}>
                {/* Заголовок категории */}
                <tr>
                    <td  colSpan="3"><span className={style.table_title}>Категория</span> {items[0]}:</td>
                </tr>

                {/* Строки с данными */}
                {items[1].map((item) => (
                    <tr key={item.id}>
                    <td><span className={style.table_title}>Описание: </span>{item.description}</td>
                    <td><span className={style.table_title}>Устройство: </span>{item.title}</td>
                    <td><span className={style.table_title}>Модель: </span>{item.sub_title}</td>
                    <td><span className={style.table_title}>Цена:</span> {item.price}</td>
                    <td>
                        <button
                        className={style.btn}
                        onClick={() => deleteItem(item.id, token, item.route)}>
                        Удалить
                        </button>
                    </td>
                    </tr>
                ))}

                {/* Форма для добавления новой записи */}
                <tr>
                    <td colSpan="3">
                        <table className="inner-table">
                            <tbody>
                            <tr>
                                <td className={style.form}>
                                <input
                                    className={style.form_input}
                                    type="text"
                                    name="category"
                                    placeholder="Категория*"
                                    onChange={handleChange}
                                />
                                </td>
                                <td className={style.form}>
                                <input
                                    className={style.form_input}
                                    type="text"
                                    name="description"
                                    placeholder="Описание*"
                                    onChange={handleChange}
                                />
                                </td>
                                <td className={style.form}>
                                <input
                                    className={style.form_input}
                                    type="text"
                                    name="price"
                                    placeholder="Цена*"
                                    onChange={handleChange}
                                />
                                </td>
                                <td>
                                <button
                                    className={style.btn}
                                    onClick={() => createItem(items[1], token)}
                                >
                                    Добавить
                                </button>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                </tr>
                </React.Fragment>
            ))}
            </tbody>
          );
    };

    const outHard = renderHardPriceList(HardGroupedObject);
    const outSoft = renderSoftPriceList(SoftGroupedObject);
    const outCorp = renderSoftPriceList(CorpGroupedObject);

    async function deleteItem (id,token,route) {
        const res =await fetch(`/api/${route}/${id}`,{
            method:'delete',
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        // сохранить в json
        const data = await res.json()

        // если данные с ошибкой
        if(data.errors){   
            setErrors(data.errors || !res.ok);
            console.log(errors);
        }else{
            alert(data.message);
            window.location.reload();
        }
    }


    return(
        <>
        <h2 className={style.title}>Прайс лист</h2>
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Аппаратная часть</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {outHard}
        </table>
        <table className={style.table}>
        <thead>
                <tr colSpan="3">
                    <th>Программная часть</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {outSoft}
        </table>
        <table className={style.table}>
        <thead>
                <tr colSpan="3">
                    <th>Для Юридических лиц</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {outCorp}
        </table>

        

        </>
    )
}