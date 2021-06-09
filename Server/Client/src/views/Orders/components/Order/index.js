export default function Order({ codped, order }) {

    return (

        <div className="order-item" key={codped}>
            <div className="order-date">
                <h6>{order[0].fecha.substring(0,10)}</h6>
            </div>

            <div className="tienda-info">
                <h6>{order[0].nombre_comercio}</h6>
                <img src={order[0].imagen}></img>
            </div>

            <div className="productos-order border-column">
                <h6>Productos</h6>
                {order.map(producto => <p>{producto.cant} x {producto.nombre}</p>)}
            </div >

            <div className="precio-order  border-column">
                <h6>Importe</h6>
                <p>{order[0].importetotal}</p>
            </div>

            <div className="id-order  border-column">
                <h6>ID Pedido</h6>
                <p>{order[0].codped}</p>
            </div>

            <div className="estado-order  border-column">
                <h6>Estado</h6>
                <p>{order[0].completado ? "Completado" : "Pendiente"}</p>
            </div>

        </div>
    )
}