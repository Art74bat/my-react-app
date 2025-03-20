import { Link,Outlet } from "react-router-dom";


export default function AdminBlog() {

    

    return(
        <>
            <nav>
                <Link to="add">Добавить</Link>
                <Link to="delete">Удалить</Link>
            </nav>
            <Outlet/>
        </>
    )
}