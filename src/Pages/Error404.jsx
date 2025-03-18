import style from "./css/notFound.module.css"

function Error404 () {

    return (
        <section className={style.not_found}>
            <div className={style.wrapp}>
                <img className={style.img} src="../public/images/404.png" alt="" />
            </div>

        </section>
    )
}
export default Error404;