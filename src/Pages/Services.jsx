import { Link, NavLink, Outlet } from 'react-router-dom'
import style from "./css/Services.module.css"

const Services = () => {
    return (
        <>
            <h1>Services</h1>
            <ul>
                <li>
                    <NavLink className={style.nav_link} to="devices">Devices</NavLink>
                    <NavLink className={style.nav_link} to="reviews">Manufact</NavLink>
                </li>
            </ul>
            <Outlet/>
    </>
    )
}

export default Services