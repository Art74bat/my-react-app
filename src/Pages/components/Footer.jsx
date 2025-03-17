import style from "../css/Footer.module.css"

export default function Footer () {

    return (
    <footer class={style.footer}>
        <div class={style.footer__wrapp}>
            <div class={style.information}>
                <a class={style.logo}>
                    <picture class={style.logo__pic}>
                        <img class={style.logo__img} src='./images/Logo Geko_white.png' alt='logo'/>
                    </picture>	
                </a>
                <p class={style.information__title}>ИП Шумихин М.А. ИНН/ОГРНИП: 141800214410/320623400028827</p>
                <p class={style.information__descript}>Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации.</p>
            </div>
            <nav class={style.menu}>
                <ul class={style.menu__list}>
                    <li class={style.menu__item}><a class={style.menu__link} href="№">Главная</a></li>
                    <li class={style.menu__item}><a class={style.menu__link} href="№">О компании</a></li>
                    <li class={style.menu__item}><a class={style.menu__link} href="№">Прайс лист</a></li>
                    <li class={style.menu__item}><a class={style.menu__link} href="№">Отзывы</a></li>
                    <li class={style.menu__item}><a class={style.menu__link} href="№">Блог</a></li>
                    <li class={style.menu__item}><a class={style.menu__link} href="№">Контакты</a></li>
                </ul>
            </nav>
            <div class={style.services}>
                <h2 class={style.services__title}>Услуги</h2>
                {/* <ul class="services__list">
                    <li class="services__item"><a class="services__link" href="#">Ремонт компьютеров</a></li>
                    <li class="services__item"><a class="services__link" href="#">Ремонт ноутбуков</a></li>
                    <li class="services__item"><a class="services__link" href="#">Ремонт моноблоков</a></li>
                    <li class="services__item"><a class="services__link" href="#">Ремонт техники APPLE</a></li>
                    <li class="services__item"><a class="services__link" href="#">Сборка и апгрейд компьютеров</a></li>
                    <li class="services__item"><a class="services__link" href="#">Установка ОС и программ</a></li>
                    <li class="services__item"><a class="services__link" href="#">Удаление вирусов</a></li>
                    <li class="services__item"><a class="services__link" href="#">Настройка интернета</a></li>
                    <li class="services__item"><a class="services__link" href="#">Корпоративным клиентам</a></li>
                </ul> */}
            </div>
            <div class={style.contacts}>
                <ul class={style.phone}>
                    <li class={style.phone__item}>
                        <picture class={style.phone__pic}>
                           
                            <img class={style.phone__img} src='./images/arrow_right.png' alt='icon'/>
                        </picture>	
                        <span class={style.phone__number}><a class={style.phone__link} href="#">+7 (495) 135-45-47</a></span>
                    </li>
                    <li class={style.phone__item}>
                        <picture class={style.phone__pic}>
                            
                            <img class={style.phone__img} src='./images/arrow_right.png' alt='icon'/>
                        </picture>	
                        <a class={style.phone__link} href="#">+7 (965) 318-70-14</a>
                    </li>
                </ul>
                <ul class={style.position}>
                    <li class={style.position__item}>
                        <picture class={style.position__pic}>
                      
                            <img class={style.position__img} src='./images/Icon_contacts_footer_desktop_location.png' alt='icon'/>
                        </picture>	
                        <span class={style.position__descript}>
                            г. Москва, ул. Люблинская 141, офис 319Б
                        </span>
                    </li>
                    <li class={style.position__item}>
                        <picture class={style.position__pic}>
                     
                            <img class={style.position__img} src='./images/Icon_contacts_footer_desktop_email.png' alt='icon'/>
                        </picture>	
                        <span class={style.position__descript}>
                            info@remont-geko.ru
                        </span>
                    </li>
                    <li class={style.position__item}>
                        <picture class={style.position__pic}>
                 
                            <img class={style.position__img} src='./images/Icon_contacts_footer_desktop_hours.png' alt='icon'/>
                        </picture>	
                        <span class={style.position__descript}>
                            10:00 - 20:00 (без выходных)
                        </span>
                    </li>

                </ul>
                <ul class={style.social}>
                    <li class={style.social__item}>
                        <a class={style.social__link} href="#">
                            <picture class={style.social__pic}>
                         
                                <img class={style.social__img} src='./images/Desktop_social_Instagram.png' alt='instagramm'/>
                            </picture>
                        </a>

                    </li>
                    <li class={style.social__item}>
                        <a class={style.social__link} href="#">
                            <picture class={style.social__pic} >
                       
                                <img class={style.social__img} src='./images/Desktop_social_Whatsapp.png' alt='whatsapp'/>
                            </picture>	
                        </a>
                    </li>
                    <li class={style.social__item}>
                        <a class={style.social__link} href="#">
                            <picture class={style.social__pic}>
                     
                                <img class={style.social__img} src='./images/Desktop_social_Telegram.png' alt='telegramm'/>
                            </picture>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class={style.footer_bottom}>
            <div class={style.copyright}>
                <picture class={style.copyright__pic}>

                    <img class={style.copyright__img} src='./images/copyright.png' alt='copyright'/>
                </picture>
                <a class={style.copyright__link} href="#"><span class={style.copyright__text}>2021</span> remont-deco.ru</a>	
            </div>
            <div class={style.footer_bottom__wrapp}>
                <a class={style.footer_bottom__map} href="#">Карта сайта</a>
                <a class={style.footer_bottom__politica} href="#">Политика конфденциальности</a>
            </div>
        </div>
    </footer>
    )
}