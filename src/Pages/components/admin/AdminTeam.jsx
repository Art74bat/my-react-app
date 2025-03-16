// создать нового работника в админке 
import { useContext, useEffect, useState } from "react"
import style from  "../../css/AdminTeam.module.css"
import { getTeams } from "../../getData";
import { AppContext } from "../../../Context/AppContext";
import Modal from "../Modal"
import TeamItem from "./TeamItem";


export default function AdminTeam () {
    const {token} = useContext(AppContext);
    const [errors,setErrors] = useState([]);
    const [file, setFile] = useState();
    const [team, setTeam] = useState([]);
    // для модального окна
    const [showModal, setShowModal] = useState(false);

    // показать скрыть модальное окно
    const toggleShowModal = () => {
      setShowModal(!showModal);
    };

    // типа форм даты...
    // const [formData,setFormData]= useState({
    //     name:'',
    //     second_name:'',
    //     experience:'',
    // })
    
    // на всякий случай
    function handleChangeImage(event) {
        setFile(event.target.files[0]);
      }

    // вот эта штука не работает!!!!!!!!!!!!!!!
    async function addTeam (e) {
        e.preventDefault()
        // для передачи данных на сервер
        const formData = new FormData();
        formData.append('image',file);

        // вывести что в форм-дате
        const formValues = Object.fromEntries(formData)
        console.log(formValues) 

        // запрос можно использовать axios(установлен)
        const res =await fetch(`/api/team`,{
            method:'post',
            body: formData,
        });

        // сохранить ответ в json
        const Onedata = await res.json()

        // если данные с ошибкой
        if(Onedata.errors){
            setErrors(Onedata.errors);
        }

        alert(Onedata.message);
        // window.location.reload()
    }

    // список работников ..работает
    async function loaderTeam() {
        const data = await getTeams();
        setTeam(data);
    }
    //удалить работника.. работает
    async function deleteTeam (id) {
        const res =await fetch(`/api/team/${id}`,{
            method:'delete',
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        // сохранить в json
        const data = await res.json();

        // если данные с ошибкой
        if(data.errors){   
            setErrors(data.errors || !res.ok);
            console.log(errors);
        }else{
            alert(data.message);
            // перезагрузить страницу что бы обновился список
            window.location.reload();
        }
    }

    useEffect(()=>{
        loaderTeam()
    },[])

    // обновить раьотника ...вроде работает 
    async function handleUpdate (id) {
        // e.preventDefault()
        //обьект для update
        const formData ={
            name:'',
            second_name:'',
            experience:'',
        }
        // найти запись по id
        team.map((item) => {
            if (item.id === id) {
                formData.name = item.name
                formData.second_name = item.second_name
                formData.experience = item.experience
            }
            return item;
          })
        //   console.log(formData)
        // обновить запись в базе
        const res =await fetch(`/api/team/${id}`,{
            method:'put',
            // роуты Team пока не защищены ..запросы без токена
            // headers:{
            //     Authorization:`Bearer ${token}`
            // },

            // парсить данные из типа форм-даты
            body: JSON.stringify(formData),
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
    // вывод (компонент TeanItem)
    const out = team.map((item,index) => (
        <TeamItem 
        key={index} 
        item={item}
        editItem={editItem}
        deleteTeam={deleteTeam}
        handleUpdate={handleUpdate}
        />
        )
    )

    // для обновления работника
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
    // console.log(team)
    return (
        <>
        <h2 className={style.title}>Добавить работника</h2>

        {/* form---------------------------- */}

            <div className="employes">
                <form onSubmit={addTeam} className={style.form}>
                    <label className={style.form__label}>
                    {errors.email && <p className={style.form__error}>{ errors.email[0] }</p>}
                        <span>Картинка* :</span> 
                        <input type="file" 
                        name="image" 
                        placeholder="Проблема" 
                        id="image"
                        // на всякий случай
                        onChange={handleChangeImage}
                        className={style.form__input}/>
                    </label>                   
                    <button type="submit" className={style.form__btn}>Отправить</button>
                </form>

                {/* employee list------------------------------------ */}

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
            <div className="price_lists">
                
            </div>



            <div className={style.modal}>
            <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
            </div>
        </>
    )
}