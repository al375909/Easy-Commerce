import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsContext from "./index";

export default function ProductsProvider({children}) {

    const [products, setProducts] = useState([]);
    

    const getCommerceProducts = async (commerce) => {


        const data = await axios.post("http://localhost:5000/api/tiendas/products", commerce)

     console.log(data.data)
        // asignamos a nuestra variable de entorno por el hook la informacion recogida por la llamada a la api
        await setProducts(data.data)

        
    

    }

    return (
        <ProductsContext.Provider value={
            {products, setProducts, getCommerceProducts}
        }>
            {children} </ProductsContext.Provider>
    );

}
