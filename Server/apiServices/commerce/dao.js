const pool = require('../../middleware/dbConnection').pool;

// Listado de todos los comercios disponibles.
// TODO: LISTADO DE COMERCIOS CERCANOS 
const listCommerce = async () => {
    const client = await pool.connect();

    const result = await client.query({
        text: "SELECT * FROM comercio; ",
    });

    await client.end();
    return result.rows;
};


// TODO: registro de comercios
const createCommerce = async (commerce) => {
    const client = await pool.connect();
    const res = await pool.query('INSERT INTO comercio SET ?', [commerce]);
    await client.end();
    return res.rows();
};

const getProducts = async (commerceName) => {
    const client = await pool.connect();
    const res = await pool.query('SELECT * from PRODUCTO JOIN catalogo as c USING(codprod) WHERE c.username = ?;', [commerceName]);
    await client.end();
    return res.rows();
}

const getCommerce = async(commerceName) => {
    const client = await pool.connect();
    const res = await pool.query('SELECT * from comercio where username = ?' [commerceName]);
    await client.end();
    return res.rows();
}

module.exports.listCommerce = listCommerce;
module.exports.getProducts = getProducts;
module.exports.getCommerce = getCommerce;