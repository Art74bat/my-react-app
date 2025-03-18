import OurTeam from "./components/OurTeam"
import style from "./css/About.module.css"
import Review from './Review';


export default function About () {
    return (
        <>
        <h2 className={style.title}>Компьютерный сервис Geko Corp</h2>
        <section className={style.our_target}>
           <div className={style.our_target__wrapp}>
            <p className={style.our_target__descript}>В компьютерном сервисе Geko Corp объединились профессионалы, которые хорошо знают и любят свое дело. Огромный     опыт, современная техническая база и коллективный потенциал позволяют нам оперативно и качественно решать любые     проблемы, возникшие с вашей компьютерной техникой. Мы ремонтируем любые виды техники: компьютеры, ноутбуки,     моноблоки, планшеты, технику Apple, оказываем сопутствующие услуги.</p>
             <p className={style.our_target__text}>Наша главная цель – предоставление качественного сервиса для компьютерной техники, без «подводных камней»,    связанных с обманом клиента. Мы выставляем честные цены без накруток, которые согласовываем с заказчиком до    начала работ. Наш прайс всегда актуален, размещен на сайте и мы его строго придерживаемся.</p>
             <p className={style.our_target__descript}>Мы ориентированы на долгосрочное сотрудничество с нашими клиентами и на рекомендации. Просим вас после    ремонта, выполненного нашими специалистами, оставить честный отзыв о нашей работе на независимых сайтах www   <a className={style.our_target__link} href="#">.otzovik.com</a> и <a className={style.our_target__link}href="#">www.irecommend.ru</a>, это будет вашим вкладом в нашу борьбу с недобросовестными     мастерскими-однодневками.</p>
           </div>
        </section>
        <section className={style.our_team}>
            <div className={style.our_team__wrapp}>
                <OurTeam/>
            </div>
        </section>
        <section className={style.banner}>
            <div className={style.banner__wrapp}>
                {/* НАДО БЫ SVG!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <img className={style.banner__img} src="../images/Map.png" alt="picture" />
                <p className={style.banner__description}>
                Компьютерный сервис Geko Corp предоставляет услугу срочного выездного ремонта как домашней, так и офисной компьютерной техники в Москве и ближнем Подмосковье.
                </p>
            </div>
        </section>
        <section className={style.how_we_work}>
            <h2 className={style.how_we_work__title}>Как мы работаем</h2>
            <div className={style.how_we_work__wrapp}>
                <ul className={style.card_list}>
                    <li className={style.card_list__item}>
                        <span className={style.card_list__number}>1</span>
                        <p className={style.card_list__descript}>Для вызова специалиста оформите заявку на нашем сайте или по телефону, обязательно укажите марку и модель устройства, подробно опишите проблему: это даст возможность специалисту подготовить нужные детали и инструменты для ремонта.</p>
                    </li>
                    <li className={style.card_list__item}>
                        <span className={style.card_list__number}>2</span>
                        <p className={style.card_list__descript}>Наш специалист прибудет по указанному адресу в течение часа, или вы можете договориться о любом удобном для вас времени.</p>
                    </li>
                    <li className={style.card_list__item}>
                        <span className={style.card_list__number}>3</span>
                        <p className={style.card_list__descript}> Мастер бесплатно проведет диагностику вашего компьютера для выявления причины неисправности, предложит перечень необходимых работ и согласует с вами стоимость ремонта.</p>
                    </li>
                    <li className={style.card_list__item}>
                        <span className={style.card_list__number}>4</span>
                        <p className={style.card_list__descript}>Мастер проведет работы по ремонту и настройке вашего компьютера. По окончании работ подписывается договор и акт выполненных работ.</p>
                    </li>
                    <li className={style.card_list__item}>
                        <span className={style.card_list__number}>5</span>
                        <p className={style.card_list__descript}>На все выполненные работы и комплектующие предоставляется гарантия сроком минимум на 1 год, при условии соблюдения клиентом наших рекомендаций по пользованию техникой.</p>
                    </li>
                </ul>
                <button type="submit" className={style.btn}>Вызвать мастера</button>
                <a className={style.how_we_work__link} href="#">Посмотреть прайс лист</a>
            </div>
        </section>
        <section className={style.picture}>
        <div className={style.picture__wrapp}>
            {/* <img className={style.picture__img} src="../images/Picture_1.png" alt="picture" /> */}
        </div>
        </section>
        <section className={style.repair}>
            <div className={style.repair__wrapp}>
                <h2 className={style.repair__title}>Мы ремонтируем компьютеры и ноутбуки <br/> любых марок <br/> и неисправности любой сложности</h2>
                <div className={style.inner_wrapp}>
                    <ul className={style.inner_wrapp__card_list}>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Philips.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Apple.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Toshiba.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/HP.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Lenovo.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Xiaomi.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Huawei.png"  alt="picture" />
                        </li>
                    </ul>
                    <ul className={style.inner_wrapp__card_list}>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/LG.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Sony.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Dell.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Samsung.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Asus.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Vaio.png"  alt="picture" />
                        </li>
                        <li className={style.inner_wrapp__card_item}>
                            <img src="../images/cards_about/Accer.png"  alt="picture" />
                        </li>
                    </ul>
                </div>
                <p className={style.repair__description}>
                    В своей работе мы используем только лицензионное программное обеспечение и оригинальные комплектующие от официальных дистрибьюторов
                </p>
            </div>
        </section>
        <section className={style.payment}>
            <div className={style.payment__wrapp}>
                <h2 className={style.payment__title}>Способы оплаты</h2>
                <p className={style.payment__descript}>
                Мы работаем с частными и юридическими лицами. Вы можете оплатить работу наших специалистов любым удобным для вас способом.
                </p>
                <h3 className={style.payment__subtitle}>Физические лица</h3>
                {/* flex-wrap??? media query */}
                <ul className={style.payment__card_list}>
                    <li className={style.payment__card_item}>
                        <span className={style.payment__card_item_title}>Наличными мастеру</span>
                        <img className={style.payment__card_item_img} src="../images/cards_payment/Frame_116.png" alt="icon" />
                    </li>
                    <li className={style.payment__card_item}>
                        <span className={style.payment__card_item_title}>Банковская карта</span>
                        <img className={style.payment__card_item_img} src="../images/cards_payment/Sberbank.png" alt="icon" />
                    </li>
                    <li className={style.payment__card_item}>
                        <span className={style.payment__card_item_title_spec}>Перевод сбербанк <br/> онлайн </span>
                        <img className={style.payment__card_item_img} src="../images/cards_payment/Payment_logos.png" alt="icon" />
                    </li>
                    <li className={style.payment__card_item}>
                        <span className={style.payment__card_item_title}>Электронные деньги </span>
                        <img className={style.payment__card_item_img} src="../images/cards_payment/Digital_money.png" alt="icon" />
                    </li>
                </ul>
                <p className={style.payment__card_item_descript}>Оплата производится по окончании ремонта, после подписания договора и акта сдачи-приемки работ.</p>
                <h3 className={style.payment__subtitle}>Юридические лица</h3>
                <p className={style.payment__text}>Безналичный расчет</p>
                <p className={style.payment__descript}>Оплата производится в соответствии с условиями заключенного договора.</p>
            </div>
        </section>
        <Review/>
        <section class={style.why_us}>
                <h2 class={style.why_us__title}>Программа лояльности</h2>
                <div className={style.card_help}>
                <div class={style.why_us__wrapp}>
                        <div class={style.card_why}>
                            <picture class={style.card__pic}>
                                <img class={style.card__image} src='../images/cards_loyal/5.png' alt='image'/>
                            </picture>	
                            <p class={style.card__descript}>Подписчикам на наши группы в соцсетях скидка 5% на все виды работ</p>
                            <span class={style.card__dot}></span>
                        </div>
                        <div class={style.card_why}>
                            <picture class={style.card__pic}>
                                <img class={style.card__image} src='../images/cards_loyal/10.png' alt='image'/>
                            </picture>	
                            <p class={style.card__descript}>При повторном обращении в наш сервис скидка 10% на все виды работ</p>
                            <span class={style.card__dot}></span>
                        </div>
                        <div class={style.card_why}>
                            <picture class={style.card__pic}>
                                <img class={style.card__image} src='../images/cards_loyal/10.png' alt='image'/>
                            </picture>	
                            <p class={style.card__descript}>Пенсионерам предоставляется скидка 10% на все виды работ</p>
                        </div>
                    </div>
                </div>
                    
             
        </section>
        <section className={style.partners}>
            <div className={style.partners__wrapp}>
                <img className={style.partners__img} src="../public/images/78.png" alt="picture" />
                <div className={style.inner_wrapp}>
                    <h2 className={style.partners__title}>Станьте нашим партнером </h2>
                    <p className={style.partners__descript}>При рекомендации нас друзьям и знакомым мы из собственных средств выплатим вам 10% от суммы реализованного заказа </p>
                </div>
            </div>
        </section>
        <section class={style.get_consultation}>
            <div class={style.get_consultation__btn}>получить консультацию</div>
        </section>

        </>
    )
}