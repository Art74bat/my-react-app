import { Link,Outlet } from "react-router-dom";
import style from "../../css/AdminBlog.module.css"

export default function AdminBlog() {

    

    return(
        <>
            <nav className={style.nav}>
                <Link className={style.link} to="add">Добавить пост</Link>
                <Link className={style.link} to="delete">Удалить пост</Link>
                <Link className={style.link} to="part">Добавить раздел в существующий пост</Link>
            </nav>
            <Outlet/>
        </>
    )
}