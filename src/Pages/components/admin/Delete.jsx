import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import { getUser } from "../../getData";
import style from "../../css/Delete.module.css"


export default function Delete () {
    const [users,setUsers,] = useState([]);
    const [errors,setErrors,] = useState([]);
    const {token} = useContext(AppContext)

    async function loaderUsers (){
        const data = await getUser(token)
        setUsers(data);
    }

    useEffect(()=>{
        loaderUsers();
    },[])

    // функция для удаления пользователя
    async function deleteUser (id) {
        const res =await fetch(`/api/destroy/${id}`,{
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

    // вывести всех пользователей кроме суперпользователя
    const out = users.filter(item=>!item.isAdmin).map((item)=>{
        return (
            <li key={item.id} className={style.delete_list__item}>
                <span className={style.delete_list__name}>Имя: {item.name} </span>
                <span className={style.delete_list__email}>email: {item.email}</span>
                <button className={style.btn} type="submit" onClick={()=>deleteUser(item.id)}>delete</button>
            </li>
        )
    })

    return(
        <div className={style.comp_section__wrapp}>
        <h2 className={style.comp_section__title}>Список пользователей</h2>
        <ul className={style.delete_list}>
            {out}
        </ul>
        </div>

    )
}