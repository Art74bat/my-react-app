import { Outlet } from "react-router-dom";
import WriteUs from "./components/WriteUs";
import MyCall from "./components/MyCall";
import style from "./css/BlogLayout.module.css"

export default function BlogLayout () {
    return(
        <>
        <Outlet/>
        <section className={style.section_wrapp}>
        <h2 className={style.title}>Возникли вопросы?</h2>
        <h3 className={style.sub_title}>Мы с радостью ответим на любой вопрос о вашей технике. Позвоните или напишите нам.</h3>
            <div className={style.wrapp}>
               
            <div className={style.element_wrapp}>
            <MyCall />
            </div>
            <div className={style.element_wrapp}>
            <WriteUs />
            </div>
            
            </div>
        </section>
        </>
    )
}