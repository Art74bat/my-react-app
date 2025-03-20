import { Link,Outlet } from "react-router-dom";


export default function AdminBlog() {

    

    return(
        <>
            <nav>
                <Link to="add">Добавить пост</Link>
                <Link to="delete">Удалить пост</Link>
                <Link to="part">Добавить раздел в существующий пост</Link>
            </nav>
            <Outlet/>
        </>
    )
}