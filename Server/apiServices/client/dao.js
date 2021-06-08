const pool = require('../../middleware/dbConnection').pool;


const addOrder = async (paymentMethod, clientUsername, commerceUsername) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const codped = await client.query('INSERT INTO pedido (fecha, metodopago, completado, comercio_username, cliente_username)  \
                                    values(CURRENT_DATE, $1, FALSE, $2, $3) returning "codped";', [paymentMethod, commerceUsername, clientUsername])
                                    .catch(err => console.log("Error en la inserción del pedido", err.stack));
    client.release();
    return codped.rows[0].codped;
}

const deleteOrder = async (codped) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    await client.query('DELETE from pedido where codped = $1', [codped])
    .catch(err => console.log('Error en el borrado del pedido', err.stack));
}

const getItem = async (item, commerce) => {
    const client = await pool.connect().catch(err => console.log('Error en la conexión (getItem)', err.stack));
    const res = await client.query('SELECT * FROM from catalogo where username = $1 and codprod = $2',
                    [
                        commerce,
                        item.codprod
                    ])
                    .catch(err => console.log('Error en la consulta getItem', err.stack)); 
    client.release();
    return res.rows;
}

const addItems = async (items, codped) => {
    const client = await pool.connect().catch(err=> console.log('Error en la conexión de addItems', err.stack));
    let res ="";
    for(let i = 0; i < items.length; i++){
        res = await client.query('INSERT INTO lineapedido (codped, cant, importe, codprod) values($1, $2, $3, $4);', [codped, items[i].amount, 1, items[i].codprod])
        .catch(err => console.log("Error al añadir un item", err.stack));
        if(res === undefined){
            client.release();
            return false;
        }
    }
    client.release();
    return true;
}


const getOrderList = async (usernameClient) => {
    const client = await pool.connect().catch(err => console.log('Error en la conexión de getOrderList', err.stack));
    const list = await client.query('select * from pedido JOIN lineapedido using(codped) where cliente_username = $1' , [usernameClient])
                    .catch(err=> console.log('Error al acceder a los pedidos de un cliente', err.stack));
    client.release();
    return list.rows;
}


module.exports.addOrder = addOrder;
module.exports.getItem = getItem;
module.exports.addItems = addItems;
module.exports.deleteOrder = deleteOrder;
module.exports.getOrderList = getOrderList;