import { useEffect, useState } from "react";
import { getReviews } from "./getData";
import ReviewsForm from "./components/ReviewsForm";
import style from "./css/review.module.css";



export default function Review () {
    const [reviews,setReviews] = useState([]);

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
    // console.log(myReview);
    // const dateTimeString = reviews.created_at;
    // const dateOnly = dateTimeString.; // Разделить по пробелу и взять первую часть
    // console.log(dateOnly); // "10.03.2025"
    const out = myReviews.map((item)=>{
        return (
            <ul className={style.review_card} key={item.id}>
                <li className={style.review_card__title}>{item.name} <span>{item.second_name}</span> <span className={style.review_date}>{item.created_at}</span></li>
                <li className={style.review_card__text}>{item.review}</li>
                
            </ul>
        )
    })
    return (
        <>
        <h2 className={style.title}>Отзывы клиентов</h2>
        <section className={style.section_top}>
            <div className={style.section_top__wrapp}>
                <p className={style.section_top__descript}>Мы ориентированы на долгосрочное сотрудничество с нашими клиентами и на рекомендации. Просим вас после ремонта, выполненного нашими специалистами, оставить честный отзыв о нашей работе на этой странице или на независимых сайтах <a className={style.section__link} href="#">www.otzovik.com</a> и <a className={style.section__link} href="#">www.irecommend.ru</a>.</p>
                <ul className={style.inner_wrapp}>
                    <li className={style.inner_wrapp__item}>
                        <img className={style.inner_wrapp__img} src="../public/images/review/Otzovik.png" alt="icon" />
                        <span className={style.inner_wrapp__text}>Мы на</span>
                        <a className={style.section__link} href="">www.otzovik.com</a>
                    </li>
                    <li className={style.inner_wrapp__item}>
                        <img className={style.inner_wrapp__img} src="../public/images/review/irecommend.png" alt="icon" />
                        <span className={style.inner_wrapp__text}>Мы на</span>
                        <a className={style.section__link} href="">www.irecommend.ru</a>
                    </li>
                </ul>
            </div>
        </section>
        <section className={style.review}>
            <div className={style.review__wrapp}>
                {out}
            </div>
        </section>
            <ReviewsForm/>
        <p className={style.text}>Благодарим за оставленный отзыв!</p>
        </>
    )
}