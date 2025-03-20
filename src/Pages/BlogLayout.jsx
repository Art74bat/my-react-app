import { Outlet } from "react-router-dom";
import WriteUs from "./components/WriteUs";
import MyCall from "./components/MyCall";


export default function BlogLayout () {
    return(
        <>
        <Outlet/>
        <WriteUs />
        <MyCall />
        </>
    )
}