import SessionContext from "../../../../../context/session";
import { useContext, useState } from "react";

import "./style.css"

export default function ProductCard({product}) {

    const { userProducts, addProduct } = useContext(SessionContext);

    const handleOnClick = () => {
        addProduct(product.codprod, product.imagen, product.nombre);
    }

    return (<div className="commerce-card">
        <img className="card-img-top"
            src={product.imagen}
            alt="Card image cap" />
        <div className="card-body">
            <div className="card-info">
                <h5 className="card-title"> {product.nombre}</h5>
                {product.descuento > 0 ? <div> <p className="precio-ant-descuento">{product.precio}€</p>  <p className="precio-con-descuento">{(product.precio - (product.precio * product.descuento)).toFixed(2)}€</p> <p className="descuento">-{product.descuento*100}%</p></div>: <p className="precio-original">{product.precio}€</p>}
            </div>

            <a href="#" className="btn btn-primary"
                onClick={handleOnClick}>Añadir</a>
        </div>
    </div>);
}
