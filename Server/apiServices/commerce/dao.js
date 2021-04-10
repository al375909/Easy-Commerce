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
const createCommerce = async () => {
    console.log("Falta por hacer");
};

module.exports.listCommerce = listCommerce;