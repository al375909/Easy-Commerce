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


// TOODOOOOO: URGE
const getProduct = async (product, commerceName) => {
    const client = await pool.connect();
    const res = await pool.query('SELECT * from PRODUCTO as p JOIN catalogo as c USING(codprod) WHERE c.username = $1 and \
                                p.nombre = $2 and p.descripcion = $3;', [product.nombre, product.descripcion, commerceName])
                                .catch(err => console.log('Error al consultar un producto ', err.stack));
                                
    
    client.release();
    return res.rows;
}

// TODOOO URGEEE
const addProduct = async (product) => {
    const client = await pool.connect();
    console.log("AAAAAAAAAAAAA");
    await client.query('INSERT INTO producto (nombre, descripcion, precio, descuento, cantidad, imagen) VALUES($1, $2, $3, $4, $5, $6);',
                                    [product.nombre, product.descripcion, product.precio, product.descuento, product.cantidad, product.imagen])
                                    .catch(err => console.log("Error al insertar un producto ", err.stack));
    client.release();
    return;
}


// TODOOO URGEEEE
const addProductToCatalog = async (commerce, product) => {
    const client = await pool.connect();

    const productReturn = await client.query('INSERT INTO producto (nombre, descripcion, precio, descuento, cantidad, imagen) VALUES($1, $2, $3, $4, $5, $6) returning(codProd);',
    [product.nombre, product.descripcion, product.precio, product.descuento, product.cantidad, product.imagen])
    .catch(err => console.log("Error al insertar un producto ", err.stack));

    //console.log("este es mi CODPROD", productReturn.rows[0].codprod);
    productCodProd = productReturn.rows[0].codprod;
    await pool.query('INSERT INTO catalogo (codprod, username) VALUES($1, $2);', [productCodProd, commerce])
                    .catch(err => console.log('Error al insertar un producto en el catalogo ', err.stack)); // insertamos sobre la tabla de catalogo
    client.release();
    // return falta ver qué devolver
}

const getCommerce = async(commerceName) => {
    const client = await pool.connect()
    .catch(err => console.log('Error en la conexion getCommerce ', err.stack));
    const res = await client.query('SELECT * from comercio where username = $1;', [commerceName])
                .catch(err => console.log('Error al buscar un comercio concreto ', err.stack));
    await client.end();
    return res.rows;
}

module.exports.listCommerce = listCommerce;
module.exports.getProducts = getProducts;
module.exports.getCommerce = getCommerce;
module.exports.addProduct = addProduct;
module.exports.addProductToCatalog = addProductToCatalog;