import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import SessionContext from "../../../../../context/session";
import { useContext, useState } from "react";

import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

export default function ProductPopUp({ product, tienda }) {

  const { userProducts, addProduct } = useContext(SessionContext);

  const handleOnClick = () => {
    console.log("product", product)
    addProduct(product, tienda);
  }


  return (
    <Popup trigger={<button className="btn btn-primary more-info-btn"> <FontAwesomeIcon icon={faInfo} /> </button>} modal>
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
            <p className="product-info">{product.descripcion}</p>
          </div>
        </div>
        <a href="#" className="btn btn-primary"
          onClick={handleOnClick}>Añadir</a>
      </div>
    </Popup>
  );
}
