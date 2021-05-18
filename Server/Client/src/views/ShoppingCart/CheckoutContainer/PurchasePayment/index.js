import { useContext, useEffect, useState } from "react";
import SessionContext from "../../../../context/session";


export default function PurchasePayment({ totalCost }) {
    const { userProducts, deleteProduct } = useContext(SessionContext);

    const [payment, setPayment] = useState("Ninguno");

    function pricePerShop(idShop) {
        let totalAmount = 0;
        let products = userProducts.get(idShop);
        products.forEach(productInf => {
            totalAmount += (productInf.amount * (productInf.product.precio - (productInf.product.precio * productInf.product.descuento)));
        })
        return totalAmount;
    };


    return (
        <div className="purchase-payment-container">
            <h2> Tu Ticket :)</h2>
            <div className="order-details">
                <div className="purchase-price">
                    <div className="price-per-shop">
                        <p> Desglose:</p>
                        <ul>

                            {
                                Array.from(userProducts).map(([key, val]) =>
                                    <li>{key}: {pricePerShop(key)}€ </li>
                                )
                            }

                        </ul>

                    </div>
                    <div className="total-price">
                        <p> Total: {totalCost}€</p>
                    </div>
                </div>

                <div className="payment-method">
                    <div className="form" onChange={(event) => { setPayment(event.target.value) }}>
                        <input type="radio" value="Efectivo" name="paymentMethod" /> Efectivo
                        <input type="radio" value="Tarjeta" name="paymentMethod" /> Tarjeta
                        <input type="radio" value="Cupones" name="paymentMethod" /> Cupones
                    </div>

                    <p>Método de pago seleccionado: {payment}</p>
                </div>

                <div className="submit-order">
                    <button className="btn btn-primary">Confirmar pedido</button>
                </div>
            </div>


        </div>

    )


}