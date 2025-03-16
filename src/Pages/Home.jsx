// import { useEffect, useState } from "react";
// import { getDevices, getManufacturer, getReviews } from "./getData";
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
      
              <main>
            
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
                                <MasterCall/>
                                {/* <form className={styles.section_form} action="" method="post">
            
                                    <label className={styles.section_form__label} for="item">Выберите устройство</label>
                                    <select className={styles.section_form__select} name="item" id="item">
                       
                                        {devices.map((item)=>{
                                            return (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            )
                                        })}
                                    </select>
            
                                    <label className={styles.section_form__label} for="factory">Выберите производителя</label>
                                    <select className={styles.section_form__select} name="factory" id="factory">
                                      <option value="">Form_text/inactive</option>
                                      <option value="Apple">Apple</option>
                                      <option value="Samsung">Samsung</option>
                                      <option value="MSI">MSI</option>
                                      <option value="Accer">Accer</option>
                                    </select>
            
                                    <label className={styles.section_form__label} for="name">Ваше Имя*</label>
                                    <input className={styles.section_form__input_text} type="text" id="name" name="name" placeholder="Имя"/>
            
                                    <label className={styles.section_form__label} for="phone">Ваш телефон*</label>
                                    <input className={styles.section_form__input_phone} type="phone" id="phone" name="phone" placeholder="Form_text/inactive"/>
            
                                    <label className={styles.section_form__label} for="text-area">Опишите проблему</label>
                                    <textarea className={styles.section_form__text_area} id="text-area" name="text-area" rows="4" cols="50">Form_text/inactive</textarea>
            
                                    <div className={styles.section_form__wrapp}>
                                        <input className={styles.section_form__checkbox} type="checkbox" id="checkbox"/>
                                        <label className={styles.section_form__label_checkbox} for="checkbox">Даю согласие на обработку моих персональных данных и принимаю <a className={styles.section_form__checkbox_link} href="#">политику конфиденциальности</a></label>
                                    </div>
            
                                    <button className={styles.submit_btn}>Отправить</button>
              
                                </form> */}

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
                        </main>
        </>

    )
}