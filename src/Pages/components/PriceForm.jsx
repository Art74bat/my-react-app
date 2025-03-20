import { useState } from "react";
import Device from "../components/Devices";
import Manufacture from "../components/Manufacture";
import styles from "../css/PriceForm.module.css"




export default function PriceForm () {

       const [errors, setErrors] = useState([]);
        const [formData, setFormData] = useState({
            name: '',
            phone: '',
            message: '',
            calls: 1,
        });
    
        async function addCalls(e) {
            e.preventDefault();
            const res = await fetch(`/api/calls`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await res.json();
    
            if (data.errors) {
                setErrors(data.errors);
            } else if (data.message) {
                alert(data.message);
                setFormData({
                    name: '',
                    phone: '',
                    message: '',
                    calls: 1,
                });
                setErrors([]);
            }
        }


    return(
        <section className={styles.call_master}>
        <div className={styles.section_wrapp}>
            <div className={styles.inner_wrapp}>
                <h3 className={styles.section_wrapp__title}>
                    Предоставляем услугу срочного выездного ремонта компьютерной техники в Москве и МО
                </h3>
                <ul className={styles.call_master__card}>
                    <li className={styles.call_master__item}>
                        <img src="../public/images/comp/1.png" alt="icon" />
                        <span>
                            Для вызова специалиста оформите заявку на нашем сайте или   по телефону, обязательно укажите марку и модель устройства,   подробно опишите проблему: это даст возможность специалисту   подготовить нужные детали и инструменты для ремонта.
                        </span>
                    </li>
                    <li className={styles.call_master__item}>
                        <img src="../public/images/comp/2.png" alt="icon" />
                    <span>
                        Наш специалист прибудет по указанному адресу в течение часа, или вы можете договориться о любом удобном для вас времени.
                    </span>
                    </li>
                    <li className={styles.call_master__item}>
                        <img src="../public/images/comp/3.png" alt="icon" />      
                        <span> 
                            Мастер бесплатно проведет диагностику вашего компьютера для выявления причины неисправности, предложит перечень необходимых работ и согласует с вами стоимость ремонта
                        </span>                        
                    </li>
                    <li className={styles.call_master__item}>
                        <img src="../public/images/comp/4.png" alt="icon" />
                        <span>
                            Мастер проведет работы по ремонту и настройке вашего    компьютера. По окончании работ подписывается договор и акт     выполненных работ с предоставлением гарантии на выполненные     работы и комплектующие сроком на 1 год.
                        </span>
                    </li>
                </ul>
            </div>
            <form className={styles.section_form} onSubmit={addCalls} method="post">
                <label className={styles.section_form__label} htmlFor="item">Выберите устройство</label>
                <select className={styles.section_form__select} name="item" id="item">
                    <Device />
                </select>
                <label className={styles.section_form__label} htmlFor="factory">Выберите производителя</label>
                <select className={styles.section_form__select} name="factory" id="factory">
                    <Manufacture />
                </select>
                <label className={styles.section_form__label}>Ваше Имя*</label>
                {errors.name && <p className={styles.form__error}>{errors.name[0]}</p>}
                <input 
                    type="text"
                    name="name"
                    placeholder="Имя" 
                    id="name"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={styles.section_form__input_text}
                /> 
                <label className={styles.section_form__label}>Телефон*</label>
                {errors.phone && <p className={styles.form__error}>{errors.phone[0]}</p>}
                <input 
                    type="phone" 
                    name="phone" 
                    placeholder="+7( ___ ) ___ - __ - __" 
                    id="phone"
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={styles.section_form__input_phone}
                />
                <label className={styles.section_form__label}>
                    Опишите проблему : </label> 
                    <textarea 
                        name="text" 
                        rows="4"
                        cols="50"
                        id="text"
                        value={formData.message} 
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className={styles.section_form__text_area}
                    />
                
                <div className={styles.section_form__wrapp}>
                    <input className={styles.section_form__checkbox} type="checkbox" id="checkbox" required />
                    <label className={styles.section_form__label_checkbox} htmlFor="checkbox">Даю согласие на обработку моих персональных данных и принимаю <a className={styles.section_form__checkbox_link} href="#">политику конфиденциальности</a></label>
                </div>            
                <button type="submit" className={styles.submit_btn}>Вызвать Мастера</button>            
            </form>              
        </div>
        </section>
    )
}