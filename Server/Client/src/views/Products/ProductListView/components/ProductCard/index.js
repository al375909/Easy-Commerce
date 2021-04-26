
export default function ProductCard({imagen,nombreProducto}){


    return(
        <div className="card">
        <img className="card-img-top"
            src={imagen}
            alt="Card image cap"/>
        <div className="card-body">
            <div className="card-info">
                <h5 className="card-title">
                    {nombreProducto}</h5>
                <p className="card-text">cositas del producto B)</p>
            </div>
            <a href="#" className="btn btn-primary">Go to Commerce</a>
        </div>
    </div>
    );
}