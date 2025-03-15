import { Link, Outlet } from "react-router-dom";



export default function Price () {

    return (
        <>
        <h1>Price List</h1>
        <ul className="">
            <li className=""><Link className="" to="individual">Физ Лица</Link></li>
            <li className=""><Link className="" to="legal">Юр Лица</Link></li>
        </ul> 
        <Outlet/>
        </>
    )
}