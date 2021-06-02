import Header from "../../../components/Header"
import { useEffect, useState, useContext } from "react";
import Products from "./components/Products";
import data from './data.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import TiendasContext from "../../../context/tiendas";
import ProductsContext from "../../../context/products";
import SessionContext from "../../../context/session"

import "./style.css"
import AddProductPopUp from "./components/AddProductPopUp";


export default function ProductList({ match }) {

    const { products, getCommerceProducts } = useContext(ProductsContext)
    const { datos } = useContext(TiendasContext);
    const {user, setUser} = useContext(SessionContext);

    let { id } = match.params;
    const username = id
    let nombreTienda;
    let usuarioTienda;
    let commerceScope = null;
    Array.from(datos).map((commerce) => {
        // console.log("commerce", commerce);
        if (commerce.username == id) {
            commerceScope = commerce;
            nombreTienda = commerce.nombretienda;
            usuarioTienda = commerce.username;
        }
    })

    useEffect(async () => {
        await getCommerceProducts({ username })
    }, []);
    


    return (
        <div>
            <Header></Header>
            <div className="commerce-products space" >
                <div className="commerce-info">
                    <img alt='' src={commerceScope.imagen} />
                    <h1>{nombreTienda}</h1>
                </div>
                <Products products={products} tienda={nombreTienda} userTienda={usuarioTienda}></Products>
            </div>
            {user.username == usuarioTienda ?  <AddProductPopUp/> : <></>}
            
        </div>);
}
