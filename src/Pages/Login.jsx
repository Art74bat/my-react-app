import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

import Logout from './components/admin/Logout';
import { Link, Outlet } from "react-router-dom";
import Profile from "./components/admin/Profile";
import style from './css/login.module.css' 


export default function Login () {

    const [formData,setFormData]= useState({
        email:'',
        password:'',
    })
    const {setToken,user} = useContext(AppContext);
    const [errors,setErrors] = useState({});
    
    // для входа по почте и паролю
    async function handleLogin (e) {
        e.preventDefault()
        const res =await fetch('/api/login',{
            method:'post',
            body: JSON.stringify(formData),
        });
        // сохранить в json
        const data = await res.json()

        // если данные с ошибкой
        if(data.errors){
            setErrors(data.errors);
        }else{
            localStorage.setItem('token',data.token);
            setToken(data.token);
        }
        
    }
    
    return (
        <>
            {user ? (
                    <>
                        <h2 className={style.title}>Кабинет администратора</h2>
                        <div className={style.top_section}>                   
                            <Profile user={user}/>
                            <Logout/>
                        </div>
                        <ul className={style.navigate}>
                            <li className={style.navigate__item}><Link className={style.navigate_link} to="admin">Профиль</Link></li>
                            <li className={style.navigate__item}><Link className={style.navigate_link} to="info">Информация на сайте</Link></li>
                            <li className={style.navigate__item}><Link className={style.navigate_link} to="prices">Прайс лист</Link></li>
                            <li className={style.navigate__item}><Link className={style.navigate_link} to="ablog">Блог</Link></li>
                            <li className={style.navigate__item}><Link className={style.navigate_link} to="areviews">Отзывы</Link></li>
                            <li className={style.navigate__item}><Link className={style.navigate_link} to="message">Сообщения</Link></li>
                        </ul> 
                        <Outlet context={{user}}/>
                    </>
                    ):(
                    <>
                        <h1 className={style.title}> Авторизация </h1>
                        <form onSubmit={handleLogin} className={style.form}>
                            <label className={style.form__label}>
                            {errors.email && <p className={style.form__error}>{ errors.email[0] }</p>}
                                <span>Email* :</span> 
                                <input type="email" 
                                name="email" 
                                placeholder="Email" 
                                id="email"
                                value={formData.email} 
                                onChange={(e)=>setFormData({...formData, email: e.target.value})}
                                className={style.form__input}/>
                            </label>                      
                            <label className={style.form__label}>
                            {errors.password && <p className={style.form__error}>{ errors.password[0] }</p>}
                                <span>Пароль* :</span>
                                <input 
                                type="password"
                                name="password"
                                placeholder="Password" 
                                id="password"
                                value={formData.password} 
                                onChange={(e)=>setFormData({...formData, password: e.target.value})}
                                className={style.form__input}/>

                            </label>
                            <button type="submit" className={style.form__btn}>Login</button>
                        </form>
                    </>
                )
            }
        </>

    )
}