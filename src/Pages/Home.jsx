import { useEffect, useState } from "react";
import { getDevices, getManufacturer, getReviews } from "./getData";
import MasterCall from "./components/MasterCall";
import OurTeam from "./components/OurTeam";

export default function Home () {
    const [devices,setDevice]= useState([]);
    const [manufacturers,setManufacturers]= useState([]);
    const [reviews,setReviews] = useState([]);

    async function loaderDevices (){
        const data = await getDevices()
        setDevice(data);
    }
    
    async function loaderManufacturer (){
        const data = await getManufacturer();
        setManufacturers(data);
    }

    async function loaderReviews (){
        const data = await getReviews()
        setReviews(data);
    }

    useEffect(()=>{
        loaderDevices();
        loaderManufacturer();
        loaderReviews();
    },[])

    return(
        <>
        <h1>Home</h1>
        <h2>devices</h2>
            {devices.map((item)=>{
                return (
                    <ul key={item.id}>
                        <li>device: {item.name}</li>
                    </ul>
                )
            })}
            
        <h2>manufacturers</h2>
            {manufacturers.map((item)=>{
                return (
                    <ul key={item.id}>
                        <li>manufacturer: {item.name}</li>
                    </ul>
                )
            })}
        <h2>reviews</h2>
            {reviews.map((item)=>{
                return (
                    <ul key={item.id}>
                        <li><span>имя: {item.name}</span> <span>отзыв: {item.review}</span></li>
                    </ul>
                )
            })}
            <MasterCall/>
            <OurTeam/>
        </>

    )
}