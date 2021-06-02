const commerceModel = require("./model");
const passport = require("passport");

module.exports = {
  getCommerce: async function(req, res) {
    console.log("Listando comercios");
    const commerce = await commerceModel.listCommerce();
    console.log(commerce);
    res.send(commerce);
  },
  // REGISTRO DE COMERCIOS
  createCommerce: async function(req, res){
    console.log("Creando comercio");
    /*passport.authenticate('local.signup', {
      successMessage: res.sendStatus(201), // Usuario creado correctamente
      failureMessage: res.sendStatus(400), // Usuario existente 
    });*/
    
  },
  // LOGIN DE COMERCIOS
  loginCommerce: async function(req, res){
    console.log("Logeando como comercio");

    console.log(req.query);
    



    /*passport.authenticate('local.signin', {
      successMessage: res.sendStatus(200), // Usuario logeado
      failureMessage: res.sendStatus(400), // Usuario no identificado
    });*/
  },

  updateProduct: async function(req, res) {
    const product = {
      codprod: req.body.codprod,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio, 
      descuento: req.body.descuento,
      cantidad: req.body.cantidad,
      //imagen: req.body.imagen,
    };
    const validate = await commerceModel.updateProduct(product);
    res.sendStatus(201);
  },

  getProducts: async function(req, res) {
    // FALTA COMPROBAR QUE ESTO ES ASÍ
    // (creo que no)
    console.log("Get Products")
    console.log(req.params)
    const list = await commerceModel.getProducts(req.params.id);
    res.send(list)
  },

  addProduct: async function(req, res) {
    const commerce = req.body.commerceName;
    const product = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio, 
      descuento: req.body.descuento,
      cantidad: req.body.cantidad,
      imagen: req.body.imagen,
    };
    const validate = await commerceModel.addProduct(commerce, product);
    res.sendStatus(201);
  },

  deleteProduct: async function(req, res) {
    const commerceName = req.body.commerceName;
    const codProd = req.body.codProd;
    console.log("nombre comercio y codprod", commerceName, codProd);

    const validate = await commerceModel.deleteProduct(commerceName, codProd);
    res.sendStatus(201);
  },
  
};
