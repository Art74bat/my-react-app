import { Link } from "react-router-dom"
import styles from "../css/GetPriceList.module.css"

export function GetPeiceList ({route}) {

    return (
        <Link className={styles.full_price} to={`/${route}`}>Полный прайс-лист <span className={styles.price_icon_btn}><img src="../images/comp/arr.png" alt="icon" /></span> </Link>
    )
}