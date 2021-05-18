import { useContext, useEffect } from "react";
import SessionContext from "../../../../context/session";


export default function PurchasePayment() {

    const { userProducts, deleteProduct } = useContext(SessionContext);

    useEffect(() => {
        totalPrice()
    })

    function pricePerShop(idShop) {
        let totalAmount = 0;

        let products = userProducts.get(idShop);
        products.forEach(productInf => {
            totalAmount += (productInf.amount * (productInf.product.precio - (productInf.product.precio * productInf.product.descuento)));
        })

        return totalAmount;
    }

    function totalPrice() {
        let totalAmount = 0;
        Array.from(userProducts).map(([key, val]) => {
            console.log("Key", key, "Value: ", val);
            val.forEach(productInf => {
                console.log("productInf", productInf)
                totalAmount = + (productInf.amount * ((productInf.product.precio - (productInf.product.precio * productInf.product.descuento))))
            })
        })
        return totalAmount;
    }

    return (
        <div className="purchase-payment-container">
            <h2> Tu Ticke :)</h2>

            <div className="purchase-price">
                <div className="price-per-shop">
                    {
                        Array.from(userProducts).map(([key, val]) =>
                            <p>{key}: {pricePerShop(key)} </p>
                        )
                    }

                </div>
                <div className="total-price">
                    <p> Total: {totalPrice()}</p>
                </div>
            </div>

            <div className="payment-method">

            </div>

            <div className="submit-order">

            </div>
        </div>

    )


}