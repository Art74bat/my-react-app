import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import { useEffect, useRef, useState } from "react";

export default function HeaderDefault () {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    // для обработки клика вне dropdown 
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsServicesDropdownOpen(false);
        }
    };

    // перехватить клик..
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className={styles.header}>
        <div className={styles.header_wrapp}>
            <div className={styles.header_wrapp__top}>
            <div className={styles.logo}>
                <a className={styles.logo__link} href="#"><img className={styles.logo__image} src="/images/Logo Geko_white.png" alt="logo"/></a>
            </div>
            <div className={styles.header_wrapp__navigate}>
                <div className={styles.contacts}>
                    <ul className={styles.contacts__list}>
                        <li className={styles.contacts__list_item}>
                            <img className={styles.list_item_arrow} src="/images/arrow_right.png" alt="icons"/>
                            <a className={styles.list_item_link} href="#"><span className={styles.phone}>+7 (495) 135-45-47</span></a>
                        </li>
                        <li className={styles.contacts__list_item}>
                            <img className={styles.list_item_arrow} src="/images/arrow_right.png" alt="icons"/>
                            <a className={styles.list_item_link} href="#"><span className={styles.phone}>+7 (965) 318-70-14</span></a>
                        </li>
                    </ul>   
                    <ul className={styles.contacts__icons}>
                        <li className={styles.contacts__list_item}>
                            <a className={styles.list_item_link} href="#"><img className={styles.contacts__icons_img} src="/images/Desktop_social_Instagram.png" alt="instagramm"/></a>
                        </li>
                        <li className={styles.contacts__list_item}>
                            <a className={styles.list_item_link} href="#"><img className={styles.contacts__icons_img} src="/images/Desktop_social_Whatsapp.png" alt="whatsapp"/></a>
                        </li>
                        <li className={styles.contacts__list_item}>
                            <a className={styles.list_item_link} href="#"><img className={styles.contacts__icons_img} src="/images/Desktop_social_Telegram.png" alt="telegramm"/></a>
                        </li>
                    </ul>
                </div>
                <nav className={styles.navigate}>
                    <ul className={styles.navigate__list}>
                        <li className={styles.navigate__item}>
                        <Link className={styles.navigate__item_link} to="/" className={styles.navigate__item_link}>Главная</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link className={styles.navigate__item_link} to="/about">О нас</Link>
                        </li>
                        <li className={styles.navigate__item} ref={dropdownRef}>
                            <div className={styles.dropdown}>
                                    <Link className={styles.navigate__item_link} to="#" onClick={toggleServicesDropdown}>
                                        Услуги
                                    </Link>
                         
                                {isServicesDropdownOpen && (
                                    <div className={styles.dropdown__content}>
                                        <Link to="comp" className={styles.dropdown__link}>
                                            Ремонт компьютеров
                                        </Link>
                                        <Link to="laptop" className={styles.dropdown__link}>
                                            Ремонт ноутбуков
                                        </Link>
                                        {/* <Link to="/services/service3" className={styles.dropdown__link}>
                                            Ремонт моноблоков
                                        </Link>
                                        <Link to="/services/service3" className={styles.dropdown__link}>
                                            Ремонт техники Apple
                                        </Link>
                                        <Link to="/services/service3" className={styles.dropdown__link}>
                                            Установка ОС и программ
                                        </Link>
                                        <Link to="/services/service3" className={styles.dropdown__link}>
                                            Удаление вирусов
                                        </Link>
                                        <Link to="/services/service3" className={styles.dropdown__link}>
                                            Настройка интернета
                                        </Link>
                                        <Link to="/services/service3" className={styles.dropdown__link}>
                                            Корпоративным клиентам
                                        </Link> */}
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link className={styles.navigate__item_link} to="/price" >Прайс лист</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link className={styles.navigate__item_link} to="/reviews">Отзывы</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link className={styles.navigate__item_link} to="/blog" >Блог</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link className={styles.navigate__item_link} to="/contacts">Контакты</Link>
                        </li>
                        <li><Link className={styles.navigate__item_link} to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
            </div>
            {/* <div className={styles.header_wrapp__bottom}>
                    <h1 className={styles.title}>ОПЕРАТИВНАЯ КОМПЬЮТЕРНАЯ ПОМОЩЬ</h1>
                    <h2 className={styles.sub_title}>Ремонт любой сложности ПК, ноутбуков и техники Apple для дома и офиса</h2>
                    <p className={styles.description}>Срочный выезд мастера</p>
                    <a href="#" className={styles.btn}>Вызвать Мастера</a>
            </div> */}
        </div>
    </header>
    )
}