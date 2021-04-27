const pool = require('../../middleware/dbConnection').pool;

// Listado de todos los comercios disponibles.
// TODO: LISTADO DE COMERCIOS CERCANOS 
const listCommerce = async () => {
    console.log("Antes de la conexión");
    //let res;
    /*await pool.connect((err, client, release) => {
        if(err){
            return console.error('Error in the client conection ', err.stack);
        }
        client.query('SELECT * FROM comercio;', (err, result) => {
            release();
            if(err){
                return console.error('Error in the query ', err.stack);
            }
            console.log(result);
            res = result;
        })
    });*/
    //return res.rows;
    
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));

    console.log("Después de la conexión");
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
    return res.rows();
};

const getProducts = async (commerceName) => {
    const client = await pool.connect();
    const res = await pool.query('SELECT * from PRODUCTO JOIN catalogo as c USING(codprod) WHERE c.username = $1;', [commerceName]);
    await client.end();
    return res.rows;
}

const getCommerce = async(commerceName) => {
    const client = await pool.connect();
    const res = await pool.query('SELECT * from comercio where username = ?' [commerceName])
                .catch(err => console.log('Error al buscar un comercio concreto ', err.stack));
    await client.end();
    return res.rows();
}

module.exports.listCommerce = listCommerce;
module.exports.getProducts = getProducts;
module.exports.getCommerce = getCommerce;