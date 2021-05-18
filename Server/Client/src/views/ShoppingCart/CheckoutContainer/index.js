import PurchaseProducts from "./PurchaseProducts";
import PurchasePayment from "./PurchasePayment";

export default function CheckoutContainer() {


    return (
        <div className="checkout-container space-top space">
            <PurchaseProducts ></PurchaseProducts>
            <PurchasePayment ></PurchasePayment>
        </div>
    );
}