
import { Link } from 'react-router-dom';
import ComputersImage from "../../public/images/comp/Computers.png";
import CompPicture from "../../public/images/comp/CompPicture.png";
import GetConsult from "./components/Getconsult";
import PriceForm from "./components/PriceForm";
import { GetPeiceList } from "./components/GetPriseList";
import styles from "./css/Computers.module.css";
import { useEffect, useState } from 'react';

function OutItem({ items }) {
    return (
        <>
            { items.map((item) => (
                <ul className={styles.price_list}>    
                <li className={styles.price_list__item}>
                    <span className={styles.price_list__item_text}>{item.description}</span>
                    <span>{item.price} руб.</span>
                </li>
            </ul>
            ))}
        </>
    )
}
const Computers = () => {

        const [hard,setHard] = useState([]);
        const [soft,setSoft] = useState([]);

        useEffect(() => {
            // Загружаем данные 
            const fetchHard = async () => {
                const res =await fetch('/api/hards');
                const data = await res.json();
              setHard(data);
            };
            const fetchSoft = async () => {
                const res =await fetch('/api/softs');
                const data = await res.json();
              setSoft(data);
            };
        
            fetchHard();
            fetchSoft();
          }, []);

          const DataHard = hard.filter(item => item.category === 'Компьютеры');


    return (
        <>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link to="/comp" className={styles.nav_link}>Компьтеры</Link>
                    <Link to="/laptop" className={styles.nav_link}>Ноутбуки</Link>
                </nav>
            </div>
            <div className={styles.wrapp}>
                <img src={ComputersImage} alt="picture" />
                <h2 className={styles.title}>Ремонт компьютеров</h2>
            </div>
            <div className={styles.container}>
                <p className={styles.sub_title_text}>
                    Если Ваш компьютер начал работать со сбоями, издавать странные звуки или вообще перестал включаться, рекомендуем срочно обратиться к специалисту, не пытаясь самостоятельно найти причину поломки. Это позволит вам избежать лишних финансовых затрат и сэкономит время. Как правило неисправность компьютера может быть вызвана аппаратными или программными сбоями.
                </p>
                <section className={styles.truble}>
                    <div className={styles.description}>
                        <ul className={styles.card}>
                            <li className={styles.section_title}>Аппаратные неисправности</li>
                            <li className={styles.descript}>
                                Возникают из-за повреждения комплектующих системного блока: жесткого диска, материнской платы, процессора и т. д. В 95% случаев все эти проблемы наши мастера устраняют на месте в день обращения. В сложных случаях доставка в сервисный центр и обратно будет бесплатной.
                            </li>
                        </ul>
                        <ul className={styles.card}>
                            <li className={styles.section_title}>Программные сбои</li>
                            <li className={styles.descript}>Могут быть связаны с действием компьютерных вирусов и вредоносных программ. Мастер удалит любые типы вирусов и установит эффективную антивирусную защиту. В 100% случаях настройка производится на месте в день обращения.</li>
                        </ul>
                    </div>
                    <img src={CompPicture} alt="picture" />
                </section>
                <p className={styles.sub_truble_text}>
                    Квалификация специалистов сервиса Geko позволяет найти решение проблем любого уровня сложности по реанимации вашей компьютерной техники. При диагностике и ремонте компьютеров мы используем только лицензионное программное обеспечение, комплектующие от официальных дистрибьютеров и оборудование ведущих марок Gigabyte, Asus, MSI и т.д.
                </p>
            </div>
            <PriceForm/>
            <section className={styles.price}>
                <div className={styles.container}>
                <h2 className={styles.section__title}>стоимость работ</h2>
                <p className={styles.price_descript}>
                Наши цены на услуги по ремонту компьютеров окончательны, то есть не включают скрытых надбавок, которые в дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики окончательная смета работ составляется из нижеуказанных цен плюс стоимость комплектующих в случае необходимости их замены.
                </p>
                </div>
                <div className={styles.container}>
                <h3 className={styles.price_title}>Аппаратная часть</h3>
                <div className={styles.price_wrapp}>
                    <OutItem items={DataHard}/>
                </div>
                <h3 className={styles.price_title}>Программная часть</h3>
                <div className={styles.price_wrapp}>
                <OutItem items={soft}/>
                </div>
                <GetPeiceList route={'price'}/>
                </div>
            </section>
            <section className={styles.credo}>
                <div className={styles.container}>
                    <div className={styles.credo__wrapp}>
                        <img className={styles.credo__img} src="../public/images/comp/comp_icon.png" alt="icon" />
                        <p className={styles.credo__text}>
                        В большинстве случаев человеку, не знакомому с устройством компьютера, сложно понять, в чем именно причина поломки. Для того, чтобы можно было приблизительно определить, почему компьютер перестал работать, и во сколько ориентировочно обойдется его ремонт, мы приводим список основных неисправностей и их причины.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.truble_list}>
                <div className={styles.truble_list__wrapp}>
                    <h3 className={styles.truble_list__title}  > неисправность </h3>
                    <h3 className={styles.truble_list__title}  >причина</h3>
                </div>  
                <div className={styles.truble_list__wrapp}>
                    <h3 className={styles.wrapp__title}  >компьютер не включается</h3>
                    <ul className={styles.descript}>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                    </ul>
                </div>                          
                <div className={styles.truble_list__wrapp}>
                    <h3 className={styles.wrapp__title}  >компьютер сам <br/> выключается</h3>
                    <ul className={styles.descript}>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                    </ul>
                </div>                          
                <div className={styles.truble_list__wrapp}>
                    <h3 className={styles.wrapp__title}  >компьютер включается, <br/> нет изображения</h3>
                    <ul className={styles.descript}>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />       
                            <span className={styles.desctipt_item__text}>Неисправна материнская плата</span>               
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />             
                            <span className={styles.desctipt_item__text}>Неисправен процессор</span>              
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />       
                            <span className={styles.desctipt_item__text}>Короткое замыкание</span>
                        </li>
                    </ul>
                </div>                          
                <div className={styles.truble_list__wrapp}>
                    <h3 className={styles.wrapp__title}  >отсутствует звук</h3>
                    <ul className={styles.descript}>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                        </li>
                    </ul>
                </div>                          
                <div className={styles.truble_list__wrapp}>
                    <h3 className={styles.wrapp__title}  >пищит при включении</h3>
                    <ul className={styles.descript}>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="icon" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                    </ul>
                </div>                          
                <div className={styles.truble_list__wrapp}>
                    <h3 className={styles.wrapp__title}  >компьютер не включается</h3>
                    <ul className={styles.descript}>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                        <li className={styles.desctipt_item}>
                            <img className={styles.desctipt_item__img} src="../public/images/comp/Tick.png" alt="" />
                            <span className={styles.desctipt_item__text}>Неисправен  блокпитания</span>
                        </li>
                    </ul>
                </div>                          
            </section>
            <GetConsult/>
        </>
    );
}

export default Computers;