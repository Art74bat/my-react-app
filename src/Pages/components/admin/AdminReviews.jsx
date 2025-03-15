// удалить отзывы ...
import { useContext, useEffect, useState } from "react";
import { getReviews } from "../../getData";
import { AppContext } from "../../../Context/AppContext";
import style from "../../css/Message.module.css"



export default function AdminReviews () {
    const {token} = useContext(AppContext);
    const [reviews,setReviews] = useState([]);
    const [errors,setErrors] = useState([]);

    async function loaderReviews (){
        const data = await getReviews()
        setReviews(data);
    }

    useEffect(()=>{
        loaderReviews();
    },[])   

    async function deleteReview (id) {
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

    const out = reviews.map((item) => (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.review}</td>
            <td><button className={style.btn} type="submit" onClick={()=>deleteReview(item.id)}>delete</button></td>
        </tr>)
    )
    return(
        <>
            <h2 className={style.title}>Отзывы</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Email</th>
                        <th>Отзыв</th>
                        <th>удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {out}
                </tbody>
            </table>
        </>
    )
}