import { useContext, useState } from "react"
import { AppContext } from "../../../Context/AppContext";
import style from "../../css/Update.module.css";


export default function Update () {
    const {token,user} = useContext(AppContext);

    // типа форм даты...
    const [formData,setFormData]= useState({
        name:'',
        email:'',
        password:'',
    })
    const [errors,setErrors] = useState({})

    async function handleUpdate (e) {
        e.preventDefault()
        const res =await fetch(`/api/update/${user.id}`,{
            method:'put',
            headers:{
                Authorization:`Bearer ${token}`
            },
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

    return(
        <div className={style.comp_section__wrapp}>
            <h2 className={style.comp_section_title}>Обновить данные текущего профиля</h2>
            {/* <button className={style.form__btn} onClick={() => navigate(-1)}>Назад</button> */}
            <form onSubmit={handleUpdate} className={style.form}>
            <label className={style.form__label}>
            {errors.name && <p className={style.form__error}>{ errors.name[0] }</p>}
                <input type="text" 
                name="name" 
                placeholder="Name*" 
                id="name"
                value={formData.name} 
                onChange={(e)=>setFormData({...formData, name: e.target.value})}
                className={style.form__input}/>
                
            </label>

            <label className={style.form__label}>
            {errors.email && <p className={style.form__error}>{ errors.email[0] }</p>}
                <input type="email" 
                name="email" 
                placeholder="Email*" 
                id="email"
                value={formData.email} 
                onChange={(e)=>setFormData({...formData, email: e.target.value})}
                className={style.form__input}/>
                
            </label>
    
            <label className={style.form__label}>
            {errors.password && <p className={style.form__error}>{ errors.password[0] }</p>}
                <input 
                type="password"
                name="password"
                placeholder="Password*" 
                id="password"
                value={formData.password} 
                onChange={(e)=>setFormData({...formData, password: e.target.value})}
                className={style.form__input}/>
                
            </label>

            <div className={style.form__btn_wrapp}>
                <button type="submit" className={style.form__btn}>Update</button>
            </div>

            </form>  
        </div>  
    )
}