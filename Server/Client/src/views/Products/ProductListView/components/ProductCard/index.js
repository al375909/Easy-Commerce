import SessionContext from "../../../../../context/session";
import { useContext, useState } from "react";

import "./style.css"

export default function ProductCard({ product, tienda }) {

    const { userProducts, addProduct } = useContext(SessionContext);

    const handleOnClick = (event) => {
        // event.preventDefault()
        addProduct(product, tienda);
        return false;
    }

    return (<div className="commerce-card">
        <img className="card-img-top"
            src={product.imagen}
            alt="Card image cap" />
        <div className="card-body">
            <div className="card-info">
                <div className="top-side">
                    <h5 className="card-title"> {product.nombre}</h5>
                </div>
                <div className="bottom-side">
                    {product.descuento > 0 ?
                        <div className="precio">
                            <p className="precio-con-descuento precio-final">{(product.precio - (product.precio * product.descuento)).toFixed(2)}€</p>
                            <p className="precio-ant-descuento">{product.precio}€</p>
                            <p className="descuento">(-{product.descuento * 100}%)</p>
                        </div>

                        : <p className="precio-final">{product.precio}€</p>
                    }
                </div>
            </div>

            {/* // TODO Evitar que al añadir producto la web haga scroll top */}
            <a href="#" className="btn btn-primary" onClick={handleOnClick}>Añadir</a>

        </div>
    </div>);
}
