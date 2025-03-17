import { Outlet, useLocation } from 'react-router-dom'
import HeaderHome from './components/HeaderHome'

import style from "./css/AppLayout.module.css"
import Footer from './components/Footer'
// import styles from "./css/HeaderHome.module.css"
import HeaderDefault from './components/HeaderDefault';

const AppLayout = () => {
    const location = useLocation();
    return (
                
        <div className={style.container}>
            {/* для Home свой хедер */}
            {location.pathname === '/' ? <HeaderHome /> : <HeaderDefault />}
            {/* <header className={style.header}> */}
                {/* <NavLink className={style.nav_link} to="/">Главная</NavLink>
                <NavLink className={style.nav_link} to="/about">О Нас</NavLink>
                <NavLink className={style.nav_link} to="/services">Услуги</NavLink>
                <NavLink className={style.nav_link} to="/price">Прайс-лист</NavLink>
                <NavLink className={style.nav_link} to="/blog">Блог</NavLink>
                <NavLink className={style.nav_link} to="/reviews">Отзывы</NavLink>
                <NavLink className={style.nav_link} to="/contacts">Контакты</NavLink>
                <NavLink className={style.nav_link} to="/login">Логин</NavLink> */}
            {/* </header> */}
            <main className={style.main}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout