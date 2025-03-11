import { NavLink, Outlet } from 'react-router-dom'
import style from "./css/AppLayout.module.css"

const AppLayout = () => {
    return (
        <>
            <header className={style.header}>
                <NavLink className={style.nav_link} to="/">Главная</NavLink>
                <NavLink className={style.nav_link} to="/about">О Нас</NavLink>
                <NavLink className={style.nav_link} to="/services">Услуги</NavLink>
                <NavLink className={style.nav_link} to="/price">Прайс-лист</NavLink>
                <NavLink className={style.nav_link} to="/blog">Блог</NavLink>
                <NavLink className={style.nav_link} to="/reviews">Отзывы</NavLink>
                <NavLink className={style.nav_link} to="/contacts">Контакты</NavLink>
                <NavLink className={style.nav_link} to="/login">Логин</NavLink>
            </header>
            <main className={style.main}>
                <Outlet />
            </main>
            <footer className={style.footer}>Copyright 2025</footer>
        </>
    )
}

export default AppLayout