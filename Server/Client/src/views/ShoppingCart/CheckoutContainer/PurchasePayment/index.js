export default function PurchasePayment({ productsMap }) {

    function pricePerShop(idShop) {
        let totalAmount = 0;

        let products = productsMap.get(idShop);
        products.forEach(product => {
            totalAmount += (product.amount * (product.product.precio - (product.product.precio * product.product.descuento)));
        })
        return totalAmount;
    }


    return (
        <div className="purchase-payment-container">
            <div className="purchase-price">
                {
                    Array.from(productsMap).map(([key, val]) =>
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