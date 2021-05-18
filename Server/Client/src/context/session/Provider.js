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

    const addProduct = (productObj, shopID) => {
        console.log("Session Provider -> AddProduct ", productObj);
        // Check if shop exist:
        let products = userProducts.get(shopID);
        if (!products) {
            setUserProducts(userProducts.set(shopID, [{ product: productObj, amount: 1 }]))
        } else {
            // Check if the shop constains the product
            let productID = productObj.codprod;
            let productInf = products.filter(productInf => productInf.product.codprod == productID);

            // if the product is new:
            if (productInf.length == 0) {
                // Update the products array with the new one.
                products.push({ product: productObj, amount: 1 });
                setUserProducts(userProducts.set(shopID, products));

            } else {
                // Update the amount of the product
                let currentAmount = productInf[0].amount;
                const newProducts = products.filter(productInf => productInf.product.codprod != productID);
                let updatedProduct = { product: productObj, amount: currentAmount + 1 }
                newProducts.push(updatedProduct);
                setUserProducts(userProducts.set(shopID, newProducts));
            }

        }

        // update localStorage
        localStorage.setItem('productMap', JSON.stringify(Array.from(userProducts)));
    }

    const deleteProduct = (shopID, productID) => {
        let products = userProducts.get(shopID);
        const newProducts = products.filter(productInf => productInf.product.codprod != productID);

        setUserProducts(userProducts.set(shopID, newProducts))
        localStorage.setItem('productMap', JSON.stringify(Array.from(userProducts)));
    }


    return (
        <SessionContext.Provider value={{ user, setUser, userProducts, setUserProducts, addProduct, deleteProduct, login }}>
            {children}
        </SessionContext.Provider>
    );

}
