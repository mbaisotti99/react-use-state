import style from "./style/cardStyle.module.css"

const Card = ({ tit, desc, img}) =>{
    return (<div className="card">
        <div className={`card-head ${style.topCard}`} >
            <img src={img} alt={`Linguaggio ${tit}`} className={style.cardImg}/>
            <h2 className={style.cardTitle}>{tit}</h2>
        </div>
        <p className={style.cardTxt}>
            {desc}
        </p>
    </div>)
}

export default Card