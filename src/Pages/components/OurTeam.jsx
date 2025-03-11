import { useEffect, useState } from "react";
import { getTeams } from "../getData";


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
            <div key={item.id}>
                <img src={`${item.img_path}`} alt="picture" />
                <p><span>{item.name} </span><span>{item.second_name}</span></p>
                <p>Опыт работы: {item.experience}</p>
            </div>
        )
    )
    return(
        <>
        <h2>Наша команда</h2>
        {out}
        </>
    )
}