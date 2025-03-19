// import { useEffect, useState } from "react";
// import { getDevices, getManufacturer, getReviews } from "./getData";
import CaruselReviews from "./components/caruselReviews";
import MasterCall from "./components/MasterCall";
import OurTeam from "./components/OurTeam";
import styles from "./css/Home.module.css"

export default function Home () {
    // const [devices,setDevice]= useState([]);
    // const [manufacturers,setManufacturers]= useState([]);
    // const [reviews,setReviews] = useState([]);

    // async function loaderDevices (){
    //     const data = await getDevices()
    //     setDevice(data);
    // }
    
    // async function loaderManufacturer (){
    //     const data = await getManufacturer();
    //     setManufacturers(data);
    // }

    // async function loaderReviews (){
    //     const data = await getReviews()
    //     setReviews(data);
    // }

    // useEffect(()=>{
    //     loaderDevices();
    //     loaderManufacturer();
    //     loaderReviews();
    // },[])

    return(
        <>
            <section className={styles.services}>
                <div className={styles.services__wrapp}>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="./images/cards/Computer.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="./images/cards/Notebook.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="./images/cards/Monoblock.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="/images/cards/Apple.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="/images/cards/Upgrade.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="./images/cards/Windows.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="/images/cards/Viruses.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className={styles.card_image} src="/images/cards/Internet.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                    <div className={styles.services_card}>
                        <picture className={styles.services_card__pic}><img className="card-image" src="/images/cards/Corporate.png" alt="icon"/></picture> 

                        <h2 className={styles.services_card__title}>РЕМОНТ <br/> КОМПЬЮТЕРОВ </h2>

                        <ul className={styles.services_card__descript_list}>
                                <li className={styles.services_card__descript_item}>Замена блока питания</li>
                                <li className={styles.services_card__descript_item}>Замена материнской платы</li>
                                <li className={styles.services_card__descript_item}>Замена жесткого диска</li>
                                <li className={styles.services_card__descript_item}>Замена видеокарты</li>
                                <li className={styles.services_card__descript_item}>Восстановление данных</li>
                                <li className={styles.services_card__descript_item}>Чистка компьютера от пыли</li>
                                <li className={styles.services_card__descript_item}>и другое...</li>
                        </ul>

                        <a href="#" className={styles.services_card__btn}>подробности и цены</a>
                    </div>
                </div>
            </section>
    
            <section className={styles.not_work}>
                <h2 className={styles.not_work__title}>Не работает компьютер?</h2>
                <div className={styles.not_work_wrapp}>
                    <div className={styles.not_work_wrapp__left}>
                        <picture className={styles.not_work_wrapp__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.not_work_wrapp__img} src='./images/What We Do 1.png' alt='Picture'/>
                        </picture>	
                    </div>
                    <div className={styles.not_work_wrapp__right}>
                        <ul className={styles.list_item}>
                            <li className={styles.item}><span className={styles.item__number}>1</span><span className={styles.item__text}>Вызовите мастера для бесплатной диагностики в удобное для вас время</span></li>
                            <li className={styles.item}><span className={styles.item__number}>2</span><span className={styles.item__text}>Узнайте причину неисправности, перечень необходимых работ и стоимость ремонта</span></li>
                            <li className={styles.item}><span className={styles.item__number}>3</span><span className={styles.item__text}>Платите по окончанию выполнения ремонта и подписания договора</span></li>
                            <li className={styles.item}><span className={styles.item__number}>4</span><span className={styles.item__text}>Получите гарантию 1 год на произведенные работы</span></li>
                        </ul>
                    </div>
                </div>
                <a className={styles.not_work__btn} href="#">Подробнее</a>
            </section>
            
            <section className={styles.call_master}>
                <div className={styles.call_master__wrapp}>
                    <h2 className={styles.call_master__title}>Вызвать мастера</h2>
                    {/* компонент форма вызова  */}
                    <MasterCall/>
                    <div className={styles.advertisement_wrapp}>
                        <picture className={styles.advertisement__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.advertisement__img} src='/images/advertisement.jpeg' alt='Picture'/>
                        </picture>
                        <p className={styles.advertisement__descript}>Мастера сервисного центра Geko Corp оперативно и гарантированно устранят любые проблемы, вызванные програмными или аппаратными сбоями. В случае выявления неисправностей, которые невозможно обнаружить при первоначальной диагностике, мастер обязательно согласует с вами возникшие дополнительные расходы, так что вы всегда будете уверены в конечной стоимости ремонта.<br/>Вы можете рассчитать предварительную стоимость ремонта по ценам в нашем прайс-листе. Если вы не нашли нужную услугу, свяжитесь с нами. </p>	
                    </div>
                </div>
            </section>

            <CaruselReviews/>

            <OurTeam/>

            <section className={styles.get_consultation}>
                <div className={styles.get_consultation__wrapp}>
                    <picture className={styles.get_consultation__pic}>
                        {/* <source type='image/avif' srcset='./image/.avif'>
                        <source type='image/webp' srcset='./image/.webp' >  */}
                        <img className={styles.get_consultation__img} src='./images/consultation-image.png' alt='icon'/>
                    </picture>	
                    <p className={styles.get_consultation__descript}>
                        Мы ориентированы на долгосрочное сотрудничество с нашими клиентами и работаем по принципу “домашнего доктора” для вашей компьютерной техники, поэтому обеспечиваем вас технической поддержкой и консультациями по всем вопросам, даже самым мелким.
                    </p>
                </div>
                <div className={styles.get_consultation__btn}>получить консультацию</div>
            </section>

            <section className={styles.why_us}>
                <h2 className={styles.why_us__title}>ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ К НАМ</h2>
                <div className={styles.why_us__wrapp}>
                    <div className={styles.card}>
                        <picture class={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img class={styles.card__image} src='./images/why-us/Icon_whyus_95.png' alt='image'/>
                        </picture>	
                        <p class={styles.card__descript}>ремонтных работ выполняются на месте в день обращения</p>
                        <span class={styles.card__dot}></span>
                    </div>
                    <div className={styles.card}>
                        <picture class={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img class={styles.card__image} src='./images/why-us/Icon_whyus_purse.png' alt='image'/>
                        </picture>	
                        <p class={styles.card__descript}>Демократичные цены, отсутствие скрытых услуг и доплат</p>
                        <span class={styles.card__dot}></span>
                    </div>
                    <div className={styles.card}>
                        <picture class={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img class={styles.card__image}src='./images/why-us/Icon_whyus_sheet.png' alt='image'/>
                        </picture>	
                        <p class={styles.card__descript}>Гарантия на ремонтные работы и комплектующие один год</p>
                    </div>
                    <div className={styles.card}>
                        <picture className={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.card__image} src='./images/why-us/Icon_whyus_pro.png' alt='image'/>
                        </picture>	
                        <p className={styles.card__descript}>Все мастера – дипломированные специалисты с опытом работы более 8 лет</p>
                        <span className={styles.card__dot}></span>
                    </div>
                    <div className={styles.card}>
                        <picture className={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.card__image}  src='./images/why-us/Icon_whyus_wheels.png' alt='image'/>
                        </picture>	
                        <p className={styles.card__descript}>Современное профессиональное оборудование для диагностики и ремонта</p>
                        <span className={styles.card__dot}></span>
                    </div>
                    <div className={styles.card}>
                        <picture className={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.card__image} src='./images/why-us/Icon_whyus_notebook.png' alt='image'/>
                        </picture>	
                        <p className={styles.card__descript}>При необходимости проведем ремонт вечером или в выходной день</p>
                    </div>
                    <div className={styles.card}>
                        <picture class={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.card__image} src='./images/why-us/Icon_whyus_box.png' alt='image'/>
                        </picture>	
                        <p className={styles.card__descript}>Все запчасти только от официальных дистрибьюторов</p>
                        <span className={styles.card__dot}></span>
                    </div>
                    <div className={styles.card}>
                        <picture className={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.card__image} src='./images/why-us/Icon_whyus_windows.png' alt='image'/>
                        </picture>	
                        <p className={styles.card__descript}>Лицензионные ключи на программное обеспечение по оптовой цене</p>
                        <span className={styles.card__dot}></span>
                    </div>
                    <div className={styles.card}>
                        <picture className={styles.card__pic}>
                            {/* <source type='image/avif' srcset='./image/.avif'>
                            <source type='image/webp' srcset='./image/.webp' >  */}
                            <img className={styles.card__image} src='./images/why-us/Icon_whyus_people.png' alt='image'/>
                        </picture>	
                        <p className={styles.card__descript}>9 из 10 обратившихся рекомендуют нас друзьям и знакомым</p>
                    </div>
                </div>
            </section>

            <section className={styles.attention}>
                <div className={styles.attention__wrapp}>
                    <picture className={styles.attention__pic}>
                        {/* <source type='image/avif' srcset='./image/.avif'>
                        <source type='image/webp' srcset='./image/.webp' > */}
                        <img className={styles.attention__img} src='./images/Attention.png' alt='icon'/>
                    </picture>	
                    <p className={styles.attention__descript}>
                        Жаль, нельзя заранее предугадать будущую поломку в компьютере. Она становится заметной, лишь когда тот окончательно перестает работать. Важно вовремя обратиться в сервисный центр для предоставления компьютерной помощи как только замечена неисправность. Это избавит вас от лишних затрат и стрессовых ситуаций.
                    </p>
                </div>
            </section>
            
            <section className={styles.when_call_master}>
                <div className={styles.when_call_master__wrapp}>
                    <h2 className={styles.when_call_master__title}>Когда нужно вызвать мастера</h2>
                    <ul className={styles.when_call_master_card}>
                        <li className={styles.when_call_master_card__title}>НЕ ВКЛЮЧАЕТСЯ МОНИТОР</li>
                        <li className={styles.when_call_master_card__descript}>Убедитесь в исправности розетки и в том, что устройство к ней подключено. Возможно, не все провода или разъемы подключены корректно. Если вы все проверили и уверены, что проблема не в электропитании, поступающем к компьютеру, а в самом устройстве, вероятно монитор перестал работать по причине засорения комплектующих внутри блока. Требуется компьютерная помощь, ремонт и чистка устройства.</li>
                    </ul>
                    <ul className={styles.when_call_master_card}>
                        <li className={styles.when_call_master_card__title}>СИСТЕМНЫЙ БЛОК ИЗДАЕТ СИЛЬНЫЕ ШУМЫ </li>
                        <li className={styles.when_call_master_card__descript}>Слышно посторонние шумы из системного блока — значит, что он чем-то засорен. Важно вовремя почистить блок, чтобы избежать последствий накопления грязи и порчи блока компьютеров. Следует обратиться за услугой “компьютерная помощь” к профессионалам Geko. Мастер аккуратно очистит блок и не повредит находящиеся внутри важные комплектующие.</li>
                    </ul>
                    <ul className={styles.when_call_master_card}>
                        <li className={styles.when_call_master_card__title}>ПОЯВЛЕНИЕ “СИНЕГО ЭКРАНА СМЕРТИ”</li>
                        <li className={styles.when_call_master_card__descript}>Неисправность операционной системы говорит о наличии вирусов в компьютере. Выход из строя системного блока также может являться причиной поломки и необходимости услуги “компьютерная помощь”.</li>
                    </ul>
                    <ul className={styles.when_call_master_card}>
                        <li className={styles.when_call_master_card__title}>КОМПЬЮТЕР НЕ РАБОТАЕТ И ИЗДАЕТ РЕЗКИЕ ЗВУКИ</li>
                        <li className={styles.when_call_master_card__descript}>В таком случае признаком неполадки компьютеров является неисправность оперативной памяти или видеокарты. Старайтесь обращать внимание, когда устройство шумит и не игнорируйте эти звуки. Необходимо срочно обратиться к специалисту и провести ремонт. Если этого не сделать, в следующий раз комп может вовсе не включиться.</li>
                    </ul>
                    <ul className={styles.when_call_master_card}>
                        <li className={styles.when_call_master_card__title}>ПРОПАЛО ИЗОБРАЖЕНИЕ С МОНИТОРА</li>
                        <li className={styles.when_call_master_card__descript}>Дефекты, связанные с качеством изображений на сенсоре говорят о наличии повреждений во внутреннем чипе. О том, что неисправности в данном чипе все-таки есть, свидетельствуют посторонние объекты на экране, появившиеся полосы черного или белого цвета, а также полностью потемневший экран.</li>
                    </ul>
                    <p className={styles.when_call_master__descript}>Здесь представлены не все неисправности, которые могут встретиться во время использования компьютера. Пользователи также сталкиваются с проблемой неработающей клавиатуры, не запускающихся программ, невозможностью подключиться к интернету, неполадками, связанными с жестким диском или USB-устройством итд. Компьютерная помощь от компании Geko гарантирует быстрое решение проблем!</p>
                    <a href="#" className={styles.when_call_master__btn}>Получить консультацию</a>
                </div>
            </section>
        </>

    )
}