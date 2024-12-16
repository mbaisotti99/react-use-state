import style from "./style/cardStyle.module.css"

const Card = ({desc}) =>{
    return (<div className="card">
        <p className={style.cardTxt}>
            {desc}
        </p>
    </div>)
}

export default Card