const pool = require('../../middleware/dbConnection').pool;


const addOrder = async (paymentMethod, clientUsername, commerceUsername) => {
    console.log("comercio ", commerceUsername, "cliente ", clientUsername);
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const codped = await client.query('INSERT INTO pedido (fecha, metodopago, completado, importetotal, comercio_username, cliente_username)  \
                                    values(CURRENT_DATE, $1, FALSE, 0, $2, $3) returning "codped";', [paymentMethod, commerceUsername, clientUsername])
                                    .catch(err => console.log("Error en la inserción del pedido", err.stack));
    //await client.query('SELECT codped from pedido where ')
    client.release();
    return codped.rows[0].codped;
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

const addItems = async (items) => {
    const client = await pool.connect().catch(err=> console.log('Error en la conexión de addItems', err.stack));
    for (let item in items)
        await client.query('INSERT INTO lineapedido (codped, cant, importe, codprod) values($1, $2, $3, $4);')
        .catch(err => console.log("Error al añadir un item", err.stack));
}


const getOrderList = async (usernameClient) => {
    const client = await pool.connect().catch(err => console.log('Error en la conexión de getOrderList', err.stack));
    const list = await client.query()
                    .catch(err=> console.log('Error al acceder a los pedidos de un cliente', err.stack));
}


module.exports.addOrder = addOrder;
module.exports.getItem = getItem;
