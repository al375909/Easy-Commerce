import PurchaseProducts from "./PurchaseProducts";
import PurchasePayment from "./PurchasePayment";
import "./style.css"
import { useContext, useEffect, useState } from "react";
import SessionContext from "../../../context/session";

export default function CheckoutContainer() {

    const { userProducts } = useContext(SessionContext)
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        totalPrice();
    }, [])

    const totalPrice = () => {
        console.log("TOTAL PRICE RUNED")
        let totalAmount = 0;
        Array.from(userProducts).map(([key, val]) => {
            console.log("Key", key, "Value: ", val);
            val.forEach(productInf => {
                console.log("productInf", productInf)
                totalAmount += (productInf.amount * ((productInf.product.precio - (productInf.product.precio * productInf.product.descuento))))
            })
        })
        setTotalCost(totalAmount);
    }

    return (
        <div className="checkout-container space-top">
            <PurchaseProducts functionTotalPrice={totalPrice}></PurchaseProducts>
            <PurchasePayment totalCost={totalCost}  ></PurchasePayment>
        </div>
    );
}
