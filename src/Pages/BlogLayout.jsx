import { Outlet } from "react-router-dom";
import WriteUs from "./components/WriteUs";
import MyCall from "./components/MyCall";
import style from "./css/BlogLayout.module.css"

export default function BlogLayout () {
    return(
        <>
        <Outlet/>
        <section className={style.section_wrapp}>
            <WriteUs />
            <MyCall />
        </section>
        </>
    )
}