import { useContext } from "react";
import SessionContext from "../../../context/session";
import { useEffect, useState } from "react";
import PurchaseProducts from "./PurchaseProducts";
import PurchasePayment from "./PurchasePayment";

export default function CheckoutContainer() {

    const { userProducts } = useContext(SessionContext);

    const [productsMap, setProductsMap] = useState(new Map());


    const buildShopsFromMap = () => {
        let newMap = new Map();
        console.log("perrrrrrp");
        Array.from(userProducts).map(([key, val]) => {
            let productList = newMap.get(val.nombreTienda)
            if (productList) {
                productList.push(val)
            } else {
                newMap.set(val.nombreTienda, [val]);
            }


        })
        setProductsMap(newMap);
        console.log(newMap);
    }

    useEffect(() => {
        buildShopsFromMap();
    }, [])

    return (
        <div className="checkout-container space-top space">
            <PurchaseProducts productsMap={productsMap}></PurchaseProducts>
            <PurchasePayment productsMap={productsMap}></PurchasePayment>
        </div>
    );
}