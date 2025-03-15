// сообщения "вызвать мастера", "напишите нам"....в разделе сообщения в админке 
import { useContext, useEffect, useState } from "react";
import { getCalls } from "../../getData";

import { AppContext } from "../../../Context/AppContext";
import style from "../../css/Message.module.css"

export default function Message () {
    const {token} = useContext(AppContext);
    const [message,setMessage] = useState([]);
    const [errors,setErrors] = useState([]);
    
    async function loaderCalls (){
        const data = await getCalls()
        setMessage(data);
    }
    
    useEffect(()=>{
        loaderCalls();
    },[])


    async function deleteCall (id) {
        const res =await fetch(`/api/calls/${id}`,{
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

    const out = message.map((item) => (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.message}</td>
            <td>{(item.calls) ? "вызов мастера" : item.message ? "напишите нам" : "заказать звонок/консультацию"}</td>
            <td><button className={style.btn} type="submit" onClick={()=>deleteCall(item.id)}>delete</button></td>
        </tr>)
    )
    return (
        <>
            <h2 className={style.title}>Сообщения</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Сообщение</th>
                        <th>Дополнительно</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {out}
                </tbody>
            </table>
        </>
    )
}