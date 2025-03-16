import { useEffect, useState } from "react";
import { getHard,getSoft} from "../getData";
import { renderPriceList } from "../helpers";

// прайс лист для физицеских лиц
export default function PriceList () {
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
    // сортировать и создать массивы по категориям 
    const HardGroupedObject = hard.reduce((acc, item) => {
        if (!acc[item.groupe]) {
          acc[item.groupe] = []; // Создаем массив для каждой категории
        }
        acc[item.groupe].push(item); // Добавляем объект в соответствующую категорию
        return acc;
      }, {});
    // сортировать и создать массивы по категориям 
    const SoftGroupedObject = soft.reduce((acc, item) => {
        if (!acc[item.groupe]) {
          acc[item.groupe] = []; // Создаем массив для каждой категории
        }
        acc[item.groupe].push(item); // Добавляем объект в соответствующую категорию
        return acc;
      }, {});
      
      // console.log(SoftGroupedObject);

      const outHard = renderPriceList(HardGroupedObject)

      const outSoft = renderPriceList(SoftGroupedObject)
  
    useEffect(()=>{
        loaderHard();
        loaderSoft();
    },[])

    return (
        <>
        <h2>Аппаратная часть</h2>
            {outHard}

        <h2>Программная часть</h2>
            {outSoft}
        </>
    )
}