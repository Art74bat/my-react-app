import { Link, Outlet } from "react-router-dom";

export default function Root () {
    return(
        <>
        <header className="header">
        </header>
        <main className="main">
            <nav className="navigate">
                <Link to="/"  className="nav_link">Home</Link>
                <Link to="/reviews" className="nav_link">Отзывы</Link>
                <Link to="/about" className="nav_link">О нас</Link>
                <Link to="/service" className="nav_link">Услуги</Link>
                <Link to="/price" className="nav_link">Прайс</Link>
                <Link to="/blog" className="nav_link">Блог</Link>
                <Link to="/contacts" className="nav_link">Контакты</Link>
                <Link to="/login" className="nav_link">Логин</Link>
            </nav>
            <div className="main_wrapp">
            <Outlet/>
            </div>
        </main>
        <footer className="footer"></footer>
        </>
        
    )
}