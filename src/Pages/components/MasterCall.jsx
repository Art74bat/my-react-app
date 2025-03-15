// "вызвать мастера " на странице Home
import { useState } from "react"
import style from  "../css/MasterCall.module.css"

export default function MasterCall () {
    const [errors,setErrors] = useState([]);
    const [formData,setFormData]= useState({
        name:'',
        phone:'',
        message:'',
        calls:1,
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
        <h2>Заказать звонок</h2>
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
                    <span>Телефон* :</span> 
                    <input type="phone" 
                    name="phone" 
                    placeholder="+7( ___ ) ___ - __ - __" 
                    id="phone"
                    value={formData.phone} 
                    onChange={(e)=>setFormData({...formData, phone: e.target.value})}
                    className={style.form__input}/>
                </label>                   
                <label className={style.form__label}>
                {errors.email && <p className={style.form__error}>{ errors.email[0] }</p>}
                    <span>Опишите проблему* :</span> 
                    <input type="text" 
                    name="text" 
                    placeholder="Проблема" 
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