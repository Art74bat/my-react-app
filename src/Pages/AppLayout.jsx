import { Outlet, useLocation } from 'react-router-dom'
import HeaderHome from './components/HeaderHome'

import style from "./css/AppLayout.module.css"
import Footer from './components/Footer'
// import styles from "./css/HeaderHome.module.css"
import HeaderDefault from './components/HeaderDefault';

const AppLayout = () => {
    const location = useLocation();
    return (
                
        <div className={style.container}>
            {/* для Home свой хедер */}
            {location.pathname === '/' ? <HeaderHome /> : <HeaderDefault />}
            <main className={style.main}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout