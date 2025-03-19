import { useEffect, useState } from "react";
import { getCorp } from "../getData";
import style from "../css/FPriceList.module.css"

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

    function renderPriceList (prices) {
        // объект в массив...
        const entriesArray = Object.entries(prices);
        if (!prices || prices.lenght === 0) {
          return <p className="error">No data found.</p>; // Если ничего нет, выводим сообщение
        }

          return (
              <>
                {
                  // создать массив с парами ключ-значение
                    entriesArray.map((items,index) => (
                        <details key={index} className={style.price_list}>
                          <summary className={style.price_list__title}><span>{items[0]}</span><span><img className={style.icon} src="../public/images/Darrow.png" alt="icon" /></span></summary> 
                            {items[1].map((item)=>{
                              return <p key={item.id} className={style.price_list__descript}><span className={style.price_list__descript_text}>{item.description}</span><span className={style.price_list__descript_price}>{item.price} руб.</span></p>
                          })}
                        </details>

                    ))
                }
            </>
        );
    };
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
 
        <section className={style.section}>
            <p className={style.info}>
                Все цены, указанные в нашем прайс-листе на IT-аутсорсинг в Москве, носят ознакомительный    характер.  Точную стоимость вам озвучит специалист после аудита вашей IT-инфраструктуры. Если  вас   заинтересовали услуги компании Geko Corp, свяжитесь с нашими специалистами, и мы   разработаем для  вас индивидуальный абонентский тариф, включающий обслуживание и настройку    компьютров и офисного  оборудования.
            </p>
            {out}
        </section>
        <section className={style.section}>
          <p className={style.info}>
            Если вы не нашли интересующую вас услугу или у вас возникли вопросы, свяжитесь с нами по телефону илипомощью   формы обратной связи. Наш специалист предоставит вам исчерпывающую информацию и поможет найнестандартное   решение для любой проблемы с вашей компьютерной техникой.
          </p>
        </section>
        </>
    )
}