import { useContext } from "react";
import SessionContext from "../../../../context/session";

export default function PurchaseProducts({ functionTotalPrice }) {

    const { userProducts, deleteProduct } = useContext(SessionContext);

    const updateProducts = async (shopID, productInf) => {
        console.log("PRE DELETE")
        let productID = productInf.product.codprod;
        await deleteProduct(shopID, productID);
        console.log("POST DELETE")

        functionTotalPrice();
        console.log("POST PRICE UPDATE")
    }



    return (
        <div className="purchase-products-container"> {

            Array.from(userProducts).map(([key, val]) =>
                <div id={key} className="purchase-shops">
                    <div className="shop-name">
                        <h2>{key}</h2>
                    </div>

                    <div className="products-list">
                        {
                            val.map((productInf) =>
                                <div className="product-info" id={productInf.product.codprod}>
                                    <div className="delete-row">
                                        <button type="button" class="close" aria-label="Close" onClick={() => { updateProducts(key, productInf) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="info-row">
                                        <img alt='' src={productInf.product.imagen} />
                                        <p className="name">{productInf.product.nombre}</p>
                                        <p className="price">{productInf.product.precio}€</p>
                                        <p className="amount">{productInf.amount}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            )



        }</div>
    );

}