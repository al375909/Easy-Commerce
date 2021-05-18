import PurchaseProducts from "./PurchaseProducts";
import PurchasePayment from "./PurchasePayment";
import "./style.css"

export default function CheckoutContainer() {


    return (
        <div className="checkout-container space-top">
            <PurchaseProducts ></PurchaseProducts>
            <PurchasePayment ></PurchasePayment>
        </div>
    );
}