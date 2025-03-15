import style from "../../css/Admin.module.css";
import AdminTeam from "./AdminTeam";

export default function Info () {

    return (
        <>
            <h2 className={style.title}>Информация на сайте</h2>
            {/* список работников */}
            <AdminTeam/>
        </>
    )
}