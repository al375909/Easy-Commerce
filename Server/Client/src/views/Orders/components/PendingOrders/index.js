import Order from "../Order";


export default function PendingOrders({ orders }) {

    console.log("Complited Orders: ", orders)

    return (
        <div className="order-list-container ">
            <h1>
                Pedidos a la espera de ser recogidos
            </h1>
            <div className="orders-wrapper">
                {
                    Array.from(orders).map(([key, val]) =>

                        < Order codped={key} order={val} ></Order>
                    )
                }
            </div>




        </div>

    );


}