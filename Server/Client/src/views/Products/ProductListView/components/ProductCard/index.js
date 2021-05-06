import SessionContext from "../../../../../context/session";
import SessionProvider from "../../../../../context/session/Provider";
import { useContext, useState } from "react";

export default function ProductCard({ imagen, nombre, codprod }) {

    const { userProducts, setUserProducts } = useContext(SessionContext);

    const handleOnClick = () => {
        setUserProducts((prevProducts) => [
            ...prevProducts,
            codprod
        ])
        console.log(userProducts);
        // alert("Añadido");
    }

    return (<div className="commerce-card">
        <img className="card-img-top"
            src={imagen}
            alt="Card image cap" />
        <div className="card-body">
            <div className="card-info">
                <h5 className="card-title"> {nombre}</h5>
                <p className="card-text">cositas del producto B)</p>
            </div>

            <a href="#" className="btn btn-primary"
                onClick={handleOnClick}>Añadir</a>
        </div>
    </div>);
}
