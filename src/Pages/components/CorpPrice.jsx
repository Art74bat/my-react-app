import { useEffect, useState } from "react";
import { getCorp } from "../getData";
import { renderPriceList } from "../helpers";

// прайс лист для юридических лиц
export default function CorpPrice () {

    const [corporate,setCorporate] = useState([]);


    async function loaderCorp (){
        const data = await getCorp()
        setCorporate(data);
    }
    
    useEffect(()=>{
        loaderCorp();
    },[])

    // console.log(corporate)

    // сортировать по категориям и создать объект  {ключ: объект}
    const CorpGroupedObject = corporate.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Создаем массив для каждой категории
        }
        acc[item.category].push(item); // Добавляем объект в соответствующую категорию
        return acc;
      }, {});
    // console.log(CorpGroupedObject)


    const out = renderPriceList(CorpGroupedObject)
   
    return (
        <>
        {out}
        </>
    )
}