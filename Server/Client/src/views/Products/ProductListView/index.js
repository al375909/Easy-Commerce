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

import "./style.css"
import AddProductPopUp from "./components/AddProductPopUp";


export default function ProductList({ match }) {

    const { products, getCommerceProducts } = useContext(ProductsContext)
    const { datos } = useContext(TiendasContext);

    let { id } = match.params;
    const username = id

    let commerceScope = null;
    Array.from(datos).map((commerce) => {
        if (commerce.username == id) {
            commerceScope = commerce;
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
                    <h1>{commerceScope.username}</h1>
                </div>
                <Products products={products}></Products>
                
            </div>
            <AddProductPopUp/>
        </div>);
}
