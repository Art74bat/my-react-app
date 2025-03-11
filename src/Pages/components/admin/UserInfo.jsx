import style from "../../css/UserInfo.module.css"

export default function UserInfo ({user}) {
    return (
            <ul className={style.profile}>
                <li className={style.profile__item_title}>Ваш профиль :</li>
                <li className={style.profile__item}>Имя : <span>{user.name}</span></li>
                <li className={style.profile__item}>Email : <span>{user.email}</span></li>
            </ul>
    )
}