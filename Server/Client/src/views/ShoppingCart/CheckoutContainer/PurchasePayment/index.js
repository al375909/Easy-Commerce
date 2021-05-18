import { useContext } from "react";
import SessionContext from "../../../../context/session";


export default function PurchasePayment() {

    const { userProducts, deleteProduct } = useContext(SessionContext);

    function pricePerShop(idShop) {
        let totalAmount = 0;

        let products = userProducts.get(idShop);
        products.forEach(productInf => {
            totalAmount += (productInf.amount * (productInf.product.precio - (productInf.product.precio * productInf.product.descuento)));
        })
        return totalAmount;
    }


    return (
        <div className="purchase-payment-container">
            <div className="purchase-price">
                {
                    Array.from(userProducts).map(([key, val]) =>
                        <p>{key}: {pricePerShop(key)} </p>
                    )
                }
                <div className="price-per-shop">

                </div>
                <div className="total-price">

                </div>
            </div>
            <div className="payment-method">

            </div>
            <div className="submit-order">

            </div>
        </div>

    )


}