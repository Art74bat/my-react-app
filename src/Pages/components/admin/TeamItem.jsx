// для вывода работников в компоненте AdminTeam
import { useState } from "react"
import style from  "../../css/AdminTeam.module.css"

export default function TeamItem ({item,editItem,deleteTeam,handleUpdate}) {
    const[flag,setFlag] = useState(false)
    return (
        <>
            <tr key={item.id}>
                <td><span>{item.name}</span>{flag &&  <input value={item.name} onChange={e=>editItem(item.id,'name',e)}/>}</td>
                <td><span>{item.second_name}</span>{flag && <input value={item.second_name} onChange={e=>editItem(item.id,'second_name',e)}/>}</td>
                <td><span>{ item.experience}</span>{flag && <input value={item.experience} onChange={e=>editItem(item.id,'experience',e)}/>}</td>

                <td className={style.btn_wrapp}>
                    <button className={style.btn} type="submit" onClick={()=>deleteTeam(item.id)}>delete</button>
                    <button className={style.btn} type="submit" onClick={()=>setFlag(!flag)}>update</button>  
                    {flag && <button className={style.btn} type="submit" onClick={()=>handleUpdate(item.id)}>save</button> } 
                </td>

            </tr>
        </>
    )
}