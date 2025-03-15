
// блок наша команда на страницу Home и О Нас
import { useEffect, useState } from "react";
import { getTeams } from "../getData";
import style from "../css/OurTeam.module.css"


export default function OurTeam () {
    const [teams,setTeams] = useState([]);

    async function loaderTeams (){
        const data = await getTeams()
        setTeams(data);
    }
    // console.log(teams)
    useEffect(()=>{
        loaderTeams();
    },[])

    const out = teams.map((item) => (
            <div key={item.id} className={style.team_wrapp}>
                <img className={style.team_wrapp__image} src={`${item.img_path}`} alt="picture" />
                <p className={style.team_wrapp__title}><span>{item.name} </span><span>{item.second_name}</span></p>
                <p className={style.team_wrapp__expir}>Опыт работы: {item.experience} лет</p>
            </div>
        )
    )
    return(
        <>
        <h2 className={style.title}>Наша команда</h2>
        {out}
        </>
    )
}