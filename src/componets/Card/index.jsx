function Card() {
    return (
        <div className="card" style={{width: "25rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">$200</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary text-danger">active</h6>
                <p className="card-text">Some quick example text.</p>
            </div>
        </div>
    )
}

export default Card