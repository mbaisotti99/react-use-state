const Butt = ({ id, title, show, isSelected }) => {
    return (
    <button className={`btn ${!isSelected ? "btn-primary" : "btn-warning"} mx-3 btn-lg`} key={id} onClick={show}>
        {title}
    </button>
    )
}

export default Butt