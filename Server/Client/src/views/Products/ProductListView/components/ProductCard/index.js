
export default function ProductCard({imagen,nombre}){


    return(
        <div className="commerce-card">
        <img className="card-img-top"
            src={imagen}
            alt="Card image cap"/>
        <div className="card-body">
            <div className="card-info">
                <h5 className="card-title">
                    {nombre}</h5>
                <p className="card-text">cositas del producto B)</p>
            </div>
            <a href="#" className="btn btn-primary">Add</a>
        </div>
    </div>
    );
}