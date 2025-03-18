import { Link } from "react-router-dom";
import styles from "../css/HeaderHome.module.css";

export default function HeaderHome () {
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
                        <Link to="/" className={styles.navigate__item_link}>Главная</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link to="/about" className={styles.navigate__item_link}>О нас</Link>
                        </li>
                        <li className={styles.navigate__item}>
                            <div className={styles.dropdown}>
                                <span className={styles.navigate__item_btn}>Услуги</span>
                                {/* <div className="dropdown__list">
                                    <a className="dropdown__item" href="#">Ремонт компьютеров</a>
                                    <a className="dropdown__item" href="#">Ремонт ноутбуков</a>
                                    <a className="dropdown__item" href="#">Ремонт моноблоков</a>
                                    <a className="dropdown__item" href="#">Ремонт компьютеров</a>
                                    <a className="dropdown__item" href="#">Ремонт техники Apple</a>
                                    <a className="dropdown__item" href="#">Сборка и апгрейд компютеров</a>
                                    <a className="dropdown__item" href="#">Удаление вирусов</a>
                                    <a className="dropdown__item" href="#">Настройка интернета</a>
                                    <a className="dropdown__item" href="#">Корпоративным клиентам</a>
                                </div> */}
                            </div>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link to="/price" className={styles.navigate__item_link}>Прайс-Лист</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link to="/reviews" className={styles.navigate__item_link}>Отзывы</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link to="/blog" className={styles.navigate__item_link}>Блог</Link>
                        </li>
                        <li className={styles.navigate__item}>
                        <Link to="/contacts" className={styles.navigate__item_link}>Контакты</Link>
                        </li>
                        <li><Link to="/login" className={styles.navigate__item_link}>Login</Link></li>
                    </ul>
                </nav>
            </div>
            </div>
            <div className={styles.header_wrapp__bottom}>
                    <h1 className={styles.title}>ОПЕРАТИВНАЯ КОМПЬЮТЕРНАЯ ПОМОЩЬ</h1>
                    <h2 className={styles.sub_title}>Ремонт любой сложности ПК, ноутбуков и техники Apple для дома и офиса</h2>
                    <p className={styles.description}>Срочный выезд мастера</p>
                    <a href="#" className={styles.btn}>Вызвать Мастера</a>
                </div>
        </div>
    </header>
    )
}