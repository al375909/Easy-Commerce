import Header from "../../../components/Header"
import {useEffect, useState, useContext} from "react";
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


export default function ProductList({match}) {

    const {products, getCommerceProducts} = useContext(ProductsContext)
    let {id} = match.params;

    const username = id


    useEffect(async () => {
        await getCommerceProducts({username})
    }, []);

    return (<div>
        <Header></Header>

        <Products products={products}></Products>

    </div>);
}
