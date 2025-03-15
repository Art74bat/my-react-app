import { useEffect, useState } from "react";
import { getCorp } from "../getData";

// прайс лист для юридических лиц
export default function CorpPrice () {

    const [corporate,setCorporate] = useState([]);


    async function loaderCorp (){
        const data = await getCorp()
        setCorporate(data);
    }
   
      // Сортировка по полю title

    const outCorp=corporate.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (<ul key={item.id}><li>{item.title}</li><li>{item.description}</li><li>{item.price}</li></ul>))

    useEffect(()=>{
        loaderCorp();
    },[])

    return (
        <>
        <h2>Corp Price List</h2>
        {outCorp}
        </>
    )
}