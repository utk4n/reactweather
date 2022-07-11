import { useEffect, useState } from "react"
import style from '../Loader/loader.module.css'
const Loading = () => {
    const [loading, setLoading] = useState(1)

    const bar = {
        height: "2px",
        width: `${loading}%`,
        alignSelf: "flex-start",
        border: "3px solid #2a3249",
        background: "linear-gradient(90deg, #4ce6a4, #1d05bd)",
        borderRadius: "20px",
        padding: "10px"
    }

    // useEffect(() => {
    //     if (loading < 100)
    //         setInterval(() => {
    //             setLoading(loading + 33)
    //         }, 1500)
    //     else {
    //         return clearInterval(setLoading);
    //     }
    // })
    // console.log(loading)


    // className={style.bar}
    return (<div className={style.container}>
        <div className={style.percentage}>
            <h1>Sehirler Yükleniyor.</h1>
            <div style={bar}></div>
        </div>

    </div>)
}

export default Loading;