import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import "./style.css"
import Header from "../../components/Header";
import { Component } from "react";
import SessionContext from "../../context/session";
import PendingOrders from "./components/PendingOrders";
import ComplitedOrders from "./components/ComplitedOrders";



const getOrdersAPI = async (user) => {
    console.log("user . ", user)
    const res = await axios.get(`/api/client/listOrders`, { params: { username: user.username, type: user.tipo } });
    return res.data;
}

const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

const getPendingOrders = (list) => {
    var map = new Map();
    let listfinal = list.filter(item => !item.completado);


    let ordered = groupBy(listfinal, 'codped');

    for (const camp in ordered) {
        map.set(camp, ordered[camp])

    }

    return map;

}

const getComplitedOrders = (list) => {
    var map = new Map();

    let listfinal = list.filter(item => item.completado);

    let ordered = groupBy(listfinal, 'codped');

    for (const camp in ordered) {
        map.set(camp, ordered[camp])

    }

    return map;
}


export default function Orders() {

    const { user, userProducts, deleteProduct } = useContext(SessionContext);
    const [orders, setOrders] = useState([])




    useEffect(async () => {

        let list = await getOrdersAPI(user);
        await setOrders(list);

    }, []);

    return (
        <>
            <Header></Header>
            <div className=" space-top orders-container">
                <PendingOrders orders={getPendingOrders(orders)}></PendingOrders>
                <ComplitedOrders orders={getComplitedOrders(orders)}></ComplitedOrders>
            </div>

        </>);
}

