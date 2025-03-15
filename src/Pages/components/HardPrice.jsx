import { useEffect, useState } from "react";
import { getHard, getSoft } from "../getData";

// прайс лист для физицеских лиц
export default function HardPrice () {
    const [hard,setHard] = useState([]);
    const [soft,setSoft] = useState([]);

    async function loaderHard (){
        const data = await getHard()
        setHard(data);
    }
    async function loaderSoft (){
        const data = await getSoft()
        setSoft(data);
    }

    const outHard = hard.map((item) => (<ul key={item.id}><li>{item.category}</li><li>{item.description}</li><li>{item.price}</li></ul>))
    const outSoft= soft.map((item) => (<ul key={item.id}><li>{item.category}</li><li>{item.description}</li><li>{item.price}</li></ul>))
    useEffect(()=>{
        loaderHard();
        loaderSoft();
    },[])

    return (
        <>
        <h2>Hard Soft Price List</h2>
        {outHard}
        {outSoft}
        </>
    )
}