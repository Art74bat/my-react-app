// форма "вызвать мастера " на странице Home
import { useState } from "react"
import styles from  "../css/Home.module.css"
import Device from "./Devices";
import Manufacture from "./Manufacture";

export default function MasterCall () {
    const [errors,setErrors] = useState([]);
    
    // типа formData....
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
        // window.location.reload()
    }

    return (
        <>                                              
            <form className={styles.section_form} onSubmit={addCalls} method="post">
                        
                <label className={styles.section_form__label} htmlFor="item">Выберите устройство</label>
                <select className={styles.section_form__select} name="item" id="item">
                    <Device/>
                </select>
                        
                <label className={styles.section_form__label} htmlFor="factory">Выберите производителя</label>
                <select className={styles.section_form__select} name="factory" id="factory">
                    <Manufacture/>
                </select>
                        
                <label className={styles.section_form__label}>Ваше Имя*</label>
                {errors.password && <p className={styles.form__error}>{ errors.password[0] }</p>}
                    <input 
                    type="text"
                    name="name"
                    placeholder="Имя" 
                    id="name"
                    value={formData.name} 
                    onChange={(e)=>setFormData({...formData, name: e.target.value})}
                    className={styles.section_form__input_text}/> 
                        
                <label className={styles.section_form__label}>Телефон*</label>
                    {errors.email && <p className={styles.form__error}>{ errors.email[0] }</p>}
                        <input type="phone" 
                        name="phone" 
                        placeholder="+7( ___ ) ___ - __ - __" 
                        id="phone"
                        value={formData.phone} 
                        onChange={(e)=>setFormData({...formData, phone: e.target.value})}
                        className={styles.section_form__input_phone}/>

                <label className={styles.section_form__label}>
                {errors.email && <p className={styles.form__error}>{ errors.email[0] }</p>}
                    <span>Опишите проблему :</span> 
                    <textarea 
                    name="text" 
                    rows="4"
                    cols="50"
                    id="text"
                    value={formData.message} 
                    onChange={(e)=>setFormData({...formData, message: e.target.value})}
                    className={styles.section_form__text_area}/>
                </label> 
                <div className={styles.section_form__wrapp}>
                    <input className={styles.section_form__checkbox} type="checkbox" id="checkbox"/>
                    <label className={styles.section_form__label_checkbox} for="checkbox">Даю согласие на обработку моих персональных данных и принимаю <a className={styles.section_form__checkbox_link} href="#">политику конфиденциальности</a></label>
                </div>
                        
                <button type="submit" className={styles.submit_btn}>Отправить</button>
                          
            </form>                                               
        </>
    )
}