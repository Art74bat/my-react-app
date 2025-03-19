import { NavLink, Outlet } from "react-router-dom";
import style from "./css/Price.module.css"


export default function Price () {

    return (
        <>
            <h2 className={style.title}>ПРАЙС ЛИСТ</h2>
                <ul className={style.nav_list}>
                    <div className={style.head_wrapp}>
                        <li className={style.nav_list__item_left}>
                            <NavLink className={style.nav_list__item_link} to="individual">Физическим <br/> Лицам</NavLink>
                            <span className={style.arrow_left}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                  <defs>
                                    <clipPath id="a">
                                      <rect width="31" height="31" fill="#fff" fillOpacity="0" rx="0" transform="matrix(-1 0 0 1 32.5 .5)"/>
                                    </clipPath>
                                  </defs>
                                  <rect width="31" height="31" rx="0" transform="matrix(-1 0 0 1 32.5 .5)"/>
                                  <g clipPath="url(#a)">
                                    <path className={style.svg_left} fill="#FFF" fillRule="evenodd" d="M15 27.49a1.7 1.7 0 0 1-1.19.51 1.7 1.7 0 0 1-1.2-.51L2.49 17.2A1.72 1.72 0 0 1 2 15.98c0-.45.17-.89.49-1.21L12.61 4.48c.32-.32.75-.49 1.19-.48.44 0 .87.18 1.18.5A1.73 1.73 0 0 1 15 6.9l-7.24 7.37h19.55a1.72 1.72 0 0 1 0 3.43H7.76L15 25.07c.32.32.49.75.49 1.21 0 .45-.17.89-.49 1.21Z"/>
                                  </g>
                                </svg>
                            </span>
                        </li>
                        <li className={style.nav_list__item_right}>
                            <span className={style.arrow_right}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                  <defs>
                                    <clipPath id="a">
                                      <rect width="31" height="31" fill="#fff" fillOpacity="0" rx="0" transform="matrix(-1 0 0 1 32.5 .5)"/>
                                    </clipPath>
                                  </defs>
                                  <rect width="31" height="31" rx="0" transform="matrix(-1 0 0 1 32.5 .5)"/>
                                  <g clipPath="url(#a)">
                                    <path className={style.svg_right} fill="#FFF" fillRule="evenodd" d="M15.99 4.5a1.69 1.69 0 0 1 2.39 0L28.5 14.79a1.72 1.72 0 0 1 0 2.43L18.38 27.51c-.32.32-.75.49-1.19.48-.44 0-.87-.18-1.18-.5a1.73 1.73 0 0 1-.02-2.4l7.24-7.37H3.68A1.69 1.69 0 0 1 2 16.01a1.69 1.69 0 0 1 1.68-1.72h19.55l-7.24-7.37a1.7 1.7 0 0 1-.49-1.21c0-.45.17-.89.49-1.21Z"/>
                                  </g>
                                </svg>
                            </span>
                            <NavLink className={style.nav_list__item_link} to="legal">Корпоративным <br/> клиентам</NavLink>
                        </li>
                    </div>
                </ul> 

        <Outlet/>
        </>
    )
}