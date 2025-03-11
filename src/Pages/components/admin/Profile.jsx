import style from "../../css/Profile.module.css";

export default function Profile ({user}) {
    
    return (
        <>
            <p className={style.welcome_message}>С возвращением пользователь: <span>{user.name}</span> !</p>
        </>
    )
}