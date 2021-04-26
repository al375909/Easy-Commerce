import Header from "../../../components/Header"
import { useEffect, useState } from "react";
import Products from "./components/Products";
import data from './data.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


export default function ProductList({match,getProducts,products}){
    let {id} = match.params;
    const commerceId=id;
    products=data;
    
    useEffect(()=>{
      // getProducts(commerceId)

    });

    return(
        <div>
            <Header></Header>
            <Products products={products}></Products>

        </div>
    );
}