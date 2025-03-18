
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
            <div key={item.id} className={style.card_team}>
                <picture className={style.card_team__pic}>
                    <img className={style.card_team__img} src={`${item.img_path}`} alt='Picture'/>
                </picture>	
                <h2 className={style.card_team__title}>{item.name}</h2>
                <p className={style.card_team__descript}>Опыт работы – {item.experience} лет</p>
            </div>
            
        )
    )
    return(
        <>
            <section className={style.our_team}>
                <div className={style.our_team__title}>наша команда</div>
                <p className={style.our_team__description}>В команде мастеров компьютерного сервиса Geko объединились профессионалы, которые хорошо знают и любят свое дело. Огромный опыт, современная техническая база и коллективный потенциал позволяют нам оперативно и качественно решать любые проблемы, возникшие с вашей компьютерной техникой.</p>
                <div className={style.our_team__card_wrapp}>
                    <div className={style.card_team}>
                        <picture className={style.card_team__pic}>
                        <img className={style.card_team__img} src='../public/images/test.jpg' alt='Picture'/>
                        </picture>	
                        <h2 className={style.card_team__title}>Сергей Александров</h2>
                        <p className={style.card_team__descript}>Опыт работы – 10 лет</p>
                    </div>
                    <div className={style.card_team}>
                        <picture className={style.card_team__pic}>
                        <img className={style.card_team__img} src='../public/images/test.jpg' alt='Picture'/>
                        </picture>	
                        <h2 className={style.card_team__title}>Сергей Александров</h2>
                        <p className={style.card_team__descript}>Опыт работы – 10 лет</p>
                    </div>
                    {out}
                </div>
            </section>
   
        </>
    )
}