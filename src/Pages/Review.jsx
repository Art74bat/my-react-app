import { useEffect, useState } from "react";
import { getReviews } from "./getData";
import ReviewsForm from "./components/ReviewsForm";



export default function Review () {
    const [reviews,setReviews] = useState([]);

    async function loaderReviews (){
        const data = await getReviews()
        setReviews(data);
    }

    useEffect(()=>{
        loaderReviews();
    },[])

    return (
        <>
        <h1>reviews</h1>
            {reviews.map((item)=>{
                return (
                    <ul key={item.id}>
                        <li><span>{item.name} </span></li>
                        <li>Отзыв: {item.review}</li>
                    </ul>
                )
            })}
            <ReviewsForm/>
        </>
    )
}