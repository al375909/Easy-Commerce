import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionContext from "./index";

export default function SessionProvider({ children }) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [userProducts, setUserProducts] = useState(new Map(JSON.parse(localStorage.getItem('productMap'))) || null);

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

    const addProduct = (productId) => {
        console.log("Session Provider -> AddProduct ", productId);
        console.log("Current userProducts: ", userProducts);

        let currentAmount = userProducts.get(productId);
        //First item added
        if (!currentAmount) {
            currentAmount = 1;
            setUserProducts(prev => new Map([...prev, [productId, 1]]))
        } else {
            // update amount
            setUserProducts(prev => new Map([...prev, [productId, currentAmount + 1]]))
        }

        console.log("Updated userProducts: ", userProducts);
        // update localStorage
        localStorage.setItem('productMap', JSON.stringify(Array.from(userProducts)));

    }


    return (
        <SessionContext.Provider value={{ user, setUser, userProducts, addProduct, login }}>
            {children}
        </SessionContext.Provider>
    );

}
