import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import style from  "../../css/Logout.module.css";
import { AppContext } from "../../../Context/AppContext";



// выход из админки
export default function Logout () {

    const {token,setToken,setUser} = useContext(AppContext);

    const navigate = useNavigate();

    async function handlLogout (e) {
        e.preventDefault();
        const res = await fetch('/api/logout',{
            method:'post',
            headers:{
                Authorization:`Bearer ${token}`
            },
        });

        const data = await res.json();

        if (res.ok) {
            setUser(null)
            setToken(null)

            localStorage.removeItem('token')
            alert(data.message);
            navigate('/')
        }
    }

    return(
        <div className={style.btn_wrapp}>
           <button className={style.btn} onClick={handlLogout}>Logout</button>
        </div>
    )
}