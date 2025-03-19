

import { useEffect, useState } from "react";
import styles from "../css/CaruselReviews.module.css"
import { getReviews } from "../getData";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CaruselReviews () {
 // Состояние для текущего индекса
 const [currentIndex, setCurrentIndex] = useState(0);

    // для данных из базы
    const [reviews,setReviews] = useState([]);

    // получим данные
    async function loaderReviews (){
        const data = await getReviews()
        setReviews(data);
    }

    useEffect(()=>{
        loaderReviews();
    },[])
    
    // новый массив для вывода с "нормальной" датой
    const myReviews = reviews.map((review)=>({
        ...review,
        created_at:review.created_at.split('T')[0]//оставить только дату
    }))

  // Функция для переключения на следующий набор карточек
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= myReviews.length ? 0 : prevIndex + 3
    );
  };

  // Функция для переключения на предыдущий набор карточек
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? myReviews.length - (myReviews.length % 3 || 3) : prevIndex - 3
    );
  };


  // Получаем текущие три отзыва
  const visibleCards = myReviews.slice(currentIndex, currentIndex + 3);


  return (
    <div className={styles.reviews}>      
        <div className={styles.reviews__top_wrapp}>

            {/* кнопка назад */}
            <button onClick={prevSlide} className={styles.button}>
                <svg className={styles.reviews__btn_left} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <defs>
                  <clipPath id="a">
                    <rect width="47" height="47" fill="#fff" fillOpacity="0" rx="0" transform="translate(.5 .5)"/>
                  </clipPath>
                </defs>
                <rect width="47" height="47" rx="0" transform="translate(.5 .5)"/>
                <g fill="#E7742E" fillRule="evenodd" clipPath="url(#a)">
                  <path d="M24 45c5.56 0 10.91-2.22 14.84-6.16A20.98 20.98 0 1 0 9.15 9.15a20.98 20.98 0 0 0 0 29.69A20.99 20.99 0 0 0 24 45Zm0 3a24.03 24.03 0 0 0 24-24A24.02 24.02 0 1 0 7.02 40.97 24.03 24.03 0 0 0 24 48Z"/>
                  <path d="M25.05 34.06c.14-.14.25-.31.33-.49a1.6 1.6 0 0 0 0-1.15 1.63 1.63 0 0 0-.33-.49L17.11 24l7.94-7.94c.14-.14.25-.31.33-.49a1.6 1.6 0 0 0 0-1.15 1.63 1.63 0 0 0-.33-.49 1.4 1.4 0 0 0-.48-.32 1.47 1.47 0 0 0-1.64.32l-9 9c-.14.14-.25.31-.32.49a1.43 1.43 0 0 0 0 1.15c.07.18.18.35.32.49l9 9c.14.14.3.25.49.32a1.47 1.47 0 0 0 1.15 0c.18-.07.34-.18.48-.32Z"/>
                  <path d="M34.5 24c0-.4-.16-.78-.44-1.07A1.52 1.52 0 0 0 33 22.5H18c-.4 0-.78.15-1.07.43a1.53 1.53 0 0 0 0 2.13c.29.28.67.44 1.07.44h15c.39 0 .77-.16 1.06-.44.28-.29.44-.67.44-1.06Z"/>
                </g>
                </svg>
            </button>

            <div className={styles.reviews__title}>ОТЗЫВЫ КЛИЕНТОВ</div>

            {/* кнопка вперед */}
            <button onClick={nextSlide}  className={styles.button}>
                <svg className={styles.reviews__btn_right} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <defs>
                  <clipPath id="a">
                    <rect width="47" height="47" fill="#fff" fillOpacity="0" rx="0" transform="translate(.5 .5)"/>
                  </clipPath>
                </defs>
                <rect width="47" height="47" rx="0" transform="translate(.5 .5)"/>
                <g fill="#E7742E" fillRule="evenodd" clipPath="url(#a)">
                  <path d="M24 45c5.56 0 10.91-2.22 14.84-6.16A20.98 20.98 0 1 0 9.15 9.15a20.98 20.98 0 0 0 0 29.69A20.99 20.99 0 0 0 24 45Zm0 3a24.03 24.03 0 0 0 24-24A24.02 24.02 0 1 0 7.02 40.97 24.03 24.03 0 0 0 24 48Z"/>
                  <path d="M22.93 34.06a1.43 1.43 0 0 1-.32-.49 1.42 1.42 0 0 1 0-1.15c.07-.18.18-.35.32-.49L30.87 24l-7.94-7.94a1.43 1.43 0 0 1-.32-.49 1.42 1.42 0 0 1 0-1.15 1.43 1.43 0 0 1 .81-.81 1.42 1.42 0 0 1 1.15 0c.18.07.35.18.49.32l8.99 9c.14.14.25.31.33.49a1.62 1.62 0 0 1 0 1.15c-.08.18-.19.35-.33.49l-8.99 9c-.14.14-.31.25-.49.32a1.43 1.43 0 0 1-1.15 0 1.43 1.43 0 0 1-.49-.32Z"/>
                  <path d="M13.5 24c0-.4.15-.78.43-1.07.29-.28.67-.43 1.07-.43h15c.39 0 .77.15 1.06.43.28.29.44.67.44 1.07 0 .39-.16.77-.44 1.06-.29.28-.67.44-1.06.44H15c-.4 0-.78-.16-1.07-.44A1.52 1.52 0 0 1 13.5 24Z"/>
                </g>
                </svg>
            </button>

        </div>
        <div className={styles.cards_wrapp}>
            {/* карточки с отзывами */}
            {visibleCards.map((review) => (
                <ul key={review.id} class={styles.reviews_card}>
                    <li className={styles.reviews_card__title}><span className={styles.reviews_card__icon}>{review.name.charAt(0)}</span><span>{review.name}<br></br> {review.second_name}</span></li>
                    <li className={styles.reviews_card__date}>{review.created_at}</li>
                    <li className={styles.reviews_card__description}>{review.review}</li>
                </ul>
            ))}
        </div>
        <p className={styles.reviews__link}>Мы на<a className={styles.reviews__link_item} href="#">www.otzovicom</a></p>
        <p className={styles.reviews__link}>Мы на<a className={styles.reviews__link_item} href="#">www.irecommenru</a></p>
    </div>
  );
};

