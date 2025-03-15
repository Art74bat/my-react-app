// компонент "напишите нам" 
import { useState } from "react"
import style from  "../css/WriteUs.module.css"

export default function WriteUs () {
    const [errors,setErrors] = useState([]);
    const [formData,setFormData]= useState({
        name:'',
        email:'',
        message:'',
    })

    async function addCalls (e) {
        e.preventDefault()
        const res =await fetch(`/api/calls`,{
            method:'post',
            body: JSON.stringify(formData),
        });

        // сохранить в json
        const data = await res.json()

        // если данные с ошибкой
        if(data.errors){
            setErrors(data.errors);
        }
        alert(data.message);
        window.location.reload()
    }

    return (
        <>
        <h2>Напишите нам</h2>
            <form onSubmit={addCalls} className={style.form}>
            <label className={style.form__label}>
                {errors.password && <p className={style.form__error}>{ errors.password[0] }</p>}
                    <span>Имя* :</span>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Имя" 
                    id="name"
                    value={formData.name} 
                    onChange={(e)=>setFormData({...formData, name: e.target.value})}
                    className={style.form__input}/>
                </label>
                <label className={style.form__label}>
                {errors.email && <p className={style.form__error}>{ errors.email[0] }</p>}
                    <span>Email* :</span> 
                    <input type="email" 
                    name="email" 
                    placeholder="Email" 
                    id="email"
                    value={formData.email} 
                    onChange={(e)=>setFormData({...formData, email: e.target.value})}
                    className={style.form__input}required />
                </label>                   
                <label className={style.form__label}>
                {errors.password && <p className={style.form__error}>{ errors.password[0] }</p>}
                    <span>Сообщение* :</span>
                    <input 
                    type="text"
                    name="message"
                    placeholder="Сообщение" 
                    id="text"
                    value={formData.message} 
                    onChange={(e)=>setFormData({...formData, message: e.target.value})}
                    className={style.form__input}/>
                </label>
                <button type="submit" className={style.form__btn}>Отправить</button>
            </form>
        </>
    )
}