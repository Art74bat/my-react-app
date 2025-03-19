import { useEffect, useState } from "react";
import { getHard,getSoft} from "../getData";
import style from "../css/FPriceList.module.css"


// прайс лист для физицеских лиц
export default function FPriceList () {
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
    // сортировать по категориям и создать объект по категориям {ключ: объект}
    const HardGroupedObject = hard.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Создаем массив для каждой категории
        }
        acc[item.category].push(item); // Добавляем объект в соответствующую категорию
        return acc;
      }, {});

    // сортировать по категориям и создать объект  {ключ: объект}
    const SoftGroupedObject = soft.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Создаем массив для каждой категории
        }
        acc[item.category].push(item); // Добавляем объект в соответствующую категорию
        return acc;
      }, {});
      
      // console.log(SoftGroupedObject);

      function renderPriceList (prices) {
        // объект в массив...
        const entriesArray = Object.entries(prices);
        if (!prices || prices.lenght === 0) {
          return <p className="error">No data found.</p>; // Если ничего нет, выводим сообщение
        }
      
          return (
              <>
                {
                    entriesArray.map((items,index) => (
                      <details key={index} className={style.price_list}>
                        <summary  className={style.price_list__title}><span>{items[0]}</span><span><img className={style.icon} src="../public/images/Darrow.png" alt="icon" /></span></summary> 
                          {items[1].map((item)=>{
                            return <p key={item.id} className={style.price_list__descript}><span className={style.price_list__descript_text}>{item.description}</span><span className={style.price_list__descript_price}>{item.price} руб.</span></p>
                        })}
                      </details>
                    
                  ))
                }
              </>
          );
      };

      const outHard = renderPriceList(HardGroupedObject)

      const outSoft = renderPriceList(SoftGroupedObject)
  
    useEffect(()=>{
        loaderHard();
        loaderSoft();
    },[])

    return (
        <>
          <section className={style.section}>
              <p className={style.info}>
                Наши цены на услуги по компьютерной помощи окончательны, то есть не включают скрытых надбавок, которые в  дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики   окончательная смета работ составляется специалистом из нижеуказанных цен плюс стоимость комплектующих в случае  необходимости их замены.
              </p>
            <h2 className={style.title}>Аппаратная часть</h2>
            {outHard}
          </section>
          <section className={style.section}>
            <h2 className={style.title}>Программная часть</h2>
            {outSoft}
            </section>
            <section className={style.section}>
              <p className={style.info}>
                Если вы не нашли интересующую вас услугу или у вас возникли вопросы, свяжитесь с нами по телефону или с помощью   формы обратной связи. Наш специалист предоставит вам исчерпывающую информацию и поможет найти нестандартное   решение для любой проблемы с вашей компьютерной техникой.
              </p>
              <a href="#" className={style.consult_btn}>Получить консультацию</a>
            </section>
        </>
    )
}