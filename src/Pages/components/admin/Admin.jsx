
// import style from "../../css/Admin.module.css";
import { useOutletContext } from "react-router-dom";
import Delete from "./Delete";
import Register from "./Register";
import Update from "./Update";

export default function Admin () {
    const {user} = useOutletContext()

    return (
        <>
            {user.isAdmin && <Delete/>}
            {user.isAdmin && <Register/>}
            <Update/>
        </>
    )
}