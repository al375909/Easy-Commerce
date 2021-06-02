import SessionContext from "../../../../../context/session";
import { useContext, useState } from "react";
import axios from 'axios';
import "./style.css"
import ProductPopUp from "../ProductPopUp";
import ModifyProductPopUp from "../ModifyProductPopUp";

export default function ProductCard({ product, tienda, userTienda }) {

    const { userProducts, addProduct } = useContext(SessionContext);
    const {user, setUser} = useContext(SessionContext);

    const handleOnClick = (event) => {
        // event.preventDefault()
        addProduct(product, tienda);
        return false;
    };

    const handleOnClickDelete = async (event) => {
        console.log("Entrada 1");

        await axios.post("/api/tiendas/deleteProduct", {
            commerceName: userTienda,
            codProd:product.codprod
        })
        .then(res => {
            console.log("Producto eliminado");
        })
    };
  

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
            <ProductPopUp product={product} tienda={tienda} userTienda={userTienda} />

            {userTienda==user.username ? 
            
            <>
                <ModifyProductPopUp product={product}/>
                <a href="/" className="btn btn-danger delete-product-btn"
                    onClick={handleOnClickDelete}>Eliminar</a>
            </> : 
            
            <a href="#" className="btn btn-primary add-product-btn"
                onClick={handleOnClick}>Añadir</a>
                
            }
            
        </div>
    </div>);
}
