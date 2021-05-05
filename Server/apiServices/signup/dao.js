const pool = require('../../middleware/dbConnection').pool;

const getCommerceUser = async (username) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("SELECT * FROM comercio as c JOIN usuario as u using(username) where c.username = $1; ", [username])
<<<<<<< HEAD
                    .catch(err => console.log('Error ejecutando la consulta de loginComerce', err.stack));
=======
                    .catch(err => console.log('Error ejecutando la consulta de getCommerceUser', err.stack));
>>>>>>> origin/Carlos
    client.release();
    return result.rows;
};

const getClientUser = async (username) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("SELECT * FROM cliente as c JOIN usuario as u using(username) where c.username = $1;", [username])
<<<<<<< HEAD
                        .catch(err => console.log('Error ejecutando la consulta de loginClient ', err.stack));
=======
                        .catch(err => console.log('Error ejecutando la consulta de getClientUser ', err.stack));
>>>>>>> origin/Carlos
    client.release();
    return result.rows;
}

<<<<<<< HEAD

const createCommerce = async (commerce) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("", [username])
                    .catch(err => console.log('Error ejecutando la consulta de loginComerce', err.stack));
    client.release();
    return result.rows;
};
/*
const createClient = async (client) => {
    const bbdd = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await bbdd.query("", [username])
                    .catch(err => console.log('Error ejecutando la consulta de loginComerce', err.stack));
    bbdd.release();
    return result.rows;
};
*/
//module.exports.createClient = createClient;
module.exports.createCommerce = createCommerce;
module.exports.getCommerceUser = getCommerceUser;
module.exports.getClientUser = getClientUser;
=======
const createUser = async(user) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));

    const resultUser = await client.query("INSERT INTO usuario (username, passwd, nombre, apellidos, email) VALUES ($1, $2, $3, $4, $5);"
    , [user.username, user.passwd, user.nombre, user.apellidos, user.email])
    .catch(err => console.log('Error ejecutando la consulta de crear usuario', err.stack));
    client.release();
    return resultUser.rows;
}

const createCommerce = async (commerceUser) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));

    const resultCommerce = await client.query("INSERT INTO comercio (username, cif, nombretienda, tipocomercio, altitud, latitud, calificacion, imagen) VALUES($1, $2, $3, $4, $5, $6, $7, $8);"
                            , [commerceUser.username, commerceUser.cif, commerceUser.nombretienda, commerceUser.tipocomercio, commerceUser.altitud,
                            commerceUser.latitud, commerceUser.calificacion, commerceUser.imagen])
                            .catch(err => console.log("Error al crear un comercio ", err.stack));
    client.release();
    return;
};

const createClient = async (clientUser) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("INSERT INTO cliente (username, nif, direccion) VALUES($1, $2, $3)", [clientUser.username, clientUser.nif, clientUser.direccion])
                    .catch(err => console.log('Error ejecutando la consulta de crear cliente', err.stack));
    client.release();
    return;
};

module.exports.createClient = createClient;
module.exports.createCommerce = createCommerce;
module.exports.getCommerceUser = getCommerceUser;
module.exports.getClientUser = getClientUser;
module.exports.createUser = createUser;
>>>>>>> origin/Carlos
