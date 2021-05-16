import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionContext from "./index";

export default function SessionProvider({ children }) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [userProducts, setUserProducts] = useState(new Map(JSON.parse(localStorage.getItem('productMap'))) || new Map());

    // const [isCommerce, setIsCommerce] = useState(false);

    // TODO el user se actualizara desde el login

    const login = async (userObject) => {

        console.log("entra en axios login")
        const data = await axios.get(`/api/login`, {
            params: {
                username: userObject.username,
                password: userObject.password
            }
        });
        console.log(data.data)
        if (data.status != 401) {
            setUser(data.data);
            await localStorage.setItem('user', JSON.stringify(data.data));
        }

    }

    const addProduct = async (productId, img, name, nombreTienda) => {
        console.log("Session Provider -> AddProduct ", productId);
        console.log("Current userProducts: ", userProducts);

        let product = userProducts.get(productId);
        console.log("Product: ", product)

        if (!product) {
            await setUserProducts(userProducts.set(productId, { productName: name, productImg: img, amount: 1, nombreTienda }))
        } else {
            let currentAmount = userProducts.get(productId).amount;
            await setUserProducts(userProducts.set(productId, { productName: name, productImg: img, amount: currentAmount + 1, nombreTienda }))
        }



        console.log("Updated userProducts: ", userProducts);
        // update localStorage
        localStorage.setItem('productMap', JSON.stringify(Array.from(userProducts)));

    }


    return (
        <SessionContext.Provider value={{ user, setUser, userProducts, setUserProducts, addProduct, login }}>
            {children}
        </SessionContext.Provider>
    );

}
