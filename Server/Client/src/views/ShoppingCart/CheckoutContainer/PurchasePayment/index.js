import { useContext, useEffect, useState } from "react";
import SessionContext from "../../../../context/session";
import axios from 'axios';


export default function PurchasePayment({ totalCost }) {
    const { user, userProducts, deleteProduct } = useContext(SessionContext);

    const [payment, setPayment] = useState("Ninguno");

    function pricePerShop(idShop) {
        let totalAmount = 0;
        let products = userProducts.get(idShop);
        products.forEach(productInf => {
            totalAmount += (productInf.amount * (productInf.product.precio - (productInf.product.precio * productInf.product.descuento)));
        })
        return totalAmount;
    };

    const sendPurchase = async (purchase) => {

        const res = await axios.post(`/api/client/order/`, purchase);

        if (res.status == 201)
            return true;
        else
            return false;

    }

    const onPurchase = () => {

        Array.from(userProducts).map( async ([key, val]) => {
            var obj = {
                client: user.username,
                paymentMethod: payment,
                commerce: val[0].product.username,
                products: val.map(elem => {
                    var res = {
                        codprod: elem.product.codprod,
                        amount: elem.amount
                    }
                    return res;
                })
            }
           await sendPurchase(obj)
               
        });


    }

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
                        <input type="radio" value="efectivo" name="paymentMethod" /> Efectivo
                        <input type="radio" value="tarjeta" name="paymentMethod" /> Tarjeta
                        <input type="radio" value="cupones" name="paymentMethod" /> Cupones
                    </div>

                    <p>Método de pago seleccionado: {payment}</p>
                </div>

                <div className="submit-order">
                    <button className="btn btn-primary" onClick={onPurchase}>Confirmar pedido</button>
                </div>
            </div>


        </div>

    )


}