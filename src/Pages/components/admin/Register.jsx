import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../css/Register.module.css";



export default function Register () {

        const [formData,setFormData]= useState({
            name:'',
            email:'',
            password:'',
            password_confirmation:'',
        })

        const [errors,setErrors] = useState({})

        const navigate = useNavigate();

        async function handleRegister (e) {
            e.preventDefault()
            const res =await fetch(`/api/register`,{
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
            navigate('/login');
            
        }

    return (
        <div className={style.comp_section__wrapp}>
            <h2 className={style.comp_section_title}>Cоздать нового пользователя</h2>
            <form onSubmit={handleRegister} className={style.form}>
                <label className={style.form__label}>
                    <input type="text" 
                    name="name" 
                    placeholder="Name" 
                    id="reg_name"
                    value={formData.name} 
                    onChange={(e)=>setFormData({...formData, name: e.target.value})}
                    className={style.form__input}/>
                    {errors.name && <p className={style.form__error}>{ errors.name[0] }</p>}
                </label>

                <label className={style.form__label}>
                        <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        id="reg_email"
                        value={formData.email} 
                        onChange={(e)=>setFormData({...formData, email: e.target.value})}
                        className={style.form__input}/>
                        {errors.email && <p className={style.form__error}>{ errors.email[0] }</p>}
                </label>
        
                <label className={style.form__label}>
                        <input 
                        type="password"
                        name="password"
                        placeholder="Password" 
                        id="reg_password"
                        value={formData.password} 
                        onChange={(e)=>setFormData({...formData, password: e.target.value})}
                        className={style.form__input}/>
                        {errors.password && <p className={style.form__error}>{ errors.password[0] }</p>}
                </label>

                <label className={style.form__label}>
                        <input 
                        type="password"
                        name="password_confirmation"
                        placeholder="Password confirmation" 
                        id="password_confirmation"
                        value={formData.password_confirmation} 
                        onChange={(e)=>setFormData({...formData, password_confirmation: e.target.value})}
                        className={style.form__input}/>
                        {errors.password_confirmation && <p className={style.form__error}>{ errors.password_confirmation[0] }</p>}
                </label>
            

                <div className={style.form__btn_wrapp}>
                    <button type="submit" className={style.form__btn}>Register</button>
                </div>

            </form>  
        </div>
    )
}