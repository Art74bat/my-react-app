import WriteUs from "./components/WriteUs";

import style from "./css/Contact.module.css"

export default function Contact () {
    return (
        <section className={style.contacts}>
            <h2 className={style.title}>Контакты</h2>
            <div className={style.wrapp}>
                <img className={style.contacts_map} src="../public/images/contacts/Map_contacts.png" alt="picture" />
                {/* <YandexMap/> */}
                <div className={style.contacts_wrapp}>
                    <ul className={style.contacts_list}>
                    <li className={style.contacts_item}>
                        <img className={style.contacts_img} src="../public/images/contacts/Icon_contacts_location.png" alt="icon" />
                        <span className={style.contacts_text}>г. Москва, ул. Люблинская 141, офис 319Б</span>
                    </li>
                    <li className={style.contacts_item}>
                        <img className={style.contacts_img} src="../public/images/contacts/Icon_contacts_hours.png" alt="icon" />
                        <span className={style.contacts_text}>10:00 - 20:00 (без выходных)</span>
                    </li>
                    <li className={style.contacts_item}>
                        <img className={style.contacts_img} src="../public/images/contacts/Icon_contacts_mobile.png" alt="icon" />
                        <span className={style.contacts_text}>+7 (495) 135-45-47</span>
                    </li>
                    <li className={style.contacts_item}>
                        <img className={style.contacts_img} src="../public/images/contacts/Icon_contacts_mobile.png" alt="icon" />
                        <span className={style.contacts_text}>+7 (965) 318-70-14</span>
                    </li>
                    <li className={style.contacts_item}>
                        <img className={style.contacts_img} src="../public/images/contacts/Icon_contacts_email.png" alt="icon" />
                        <span className={style.contacts_text}>info@remont-geko.ru</span>
                    </li>
                    </ul>
                    <div className={style.inner_wrapp}>
                    <p className={style.descript}>Если у вас возникли проблемы с компьютерной техникой или вы заметили странности в ее работе,  пожалуйста, свяжитесь с нами, используя форму обратной связи ниже. Также вы можете позвонить нам по указанным номерам телефона или написать на электронную почту. Мы гарантируем быстрое и качественное решение проблем с вашей техникой.</p>
                    <WriteUs/>
                    </div>
                </div>
            </div>
            
        </section>
    )
}