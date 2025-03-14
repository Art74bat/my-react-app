
import style from  "../../css/AdminTeam.module.css"

export default function TeamItem ({item,editItem,deleteTeam,handleUpdate}) {

    return (
        <>
            <li className={style.list_item} key={item.id}>
                <span>{item.name} |</span>
                <input
                value={item.name}
                onChange={e=>editItem(item.id,'name',e)}
                />
                <span>{item.second_name} |</span>
                <input
                value={item.second_name}
                onChange={e=>editItem(item.id,'second_name',e)}
                />
                <span>{ item.experience} |</span>
                <input
                value={item.experience}
                onChange={e=>editItem(item.id,'experience',e)}
                />
                <span>
                    <button className={style.btn} type="submit" onClick={()=>deleteTeam(item.id)}>delete</button>
                    <button className={style.btn} type="submit" onClick={()=>handleUpdate(item.id)}>update</button>  
                </span>
            </li>
        </>
    )
}