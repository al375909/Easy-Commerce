const pool = require('../../middleware/dbConnection').pool;

// Listado de todos los comercios disponibles.
// TODO: LISTADO DE COMERCIOS CERCANOS 
const listCommerce = async () => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query({
        text: "SELECT * FROM comercio; ",
    }).catch(err => console.log('Error ejecutando la consulta ', err.stack));
    console.log("Después de la consulta");
    client.release();
    return result.rows;
};


// TODO: registro de comercios
const createCommerce = async (commerce) => {
    const client = await pool.connect();
    const res = await pool.query('INSERT INTO comercio SET ?', [commerce]);
    await client.end();
    return res.rows;
};

const getProducts = async (commerceName) => {
    const client = await pool.connect();
    const res = await pool.query('SELECT * from PRODUCTO JOIN catalogo as c USING(codprod) WHERE c.username = $1;', [commerceName]);
    client.release();
    return res.rows;
}

const addProduct = async (product) => {
    const client = await pool.connect();
    const res = await pool.query('INSERT INTO producto (codpro, nombre, descripcion, precio, descuento, cantidad, imagen) VALUES($1, $2, $3, $4, $5, $6, $7);'
                                    [product.codprod, product.nombre, product.descripcion, product.precio, product.descuento, product.cantidad, product.imagen]);
    console.log("ADD PRODUCT: ", res.rows);
    client.release();
    return res.rows;
}

const getCommerce = async(commerceName) => {
    const client = await pool.connect();
    const res = await pool.query('SELECT * from comercio where username = ?' [commerceName])
                .catch(err => console.log('Error al buscar un comercio concreto ', err.stack));
    await client.end();
    return res.rows;
}

module.exports.listCommerce = listCommerce;
module.exports.getProducts = getProducts;
module.exports.getCommerce = getCommerce;
module.exports.addProduct = addProduct;