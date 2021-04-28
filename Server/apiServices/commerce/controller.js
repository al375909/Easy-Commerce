const commerceModel = require("./model");
const passport = require("passport");

module.exports = {
  getCommerce: async function(req, res) {
    console.log("Listando comercios");
    const q = await commerceModel.listCommerce();
    console.log(q);
    res.send(q);
  },
  // REGISTRO DE COMERCIOS
  createCommerce: async function(req, res){
    console.log("Creando comercio");
    passport.authenticate('local.signup', {
      successMessage: res.sendStatus(201), // Usuario creado correctamente
      failureMessage: res.sendStatus(400), // Usuario existente 
    });
  },
  // LOGIN DE COMERCIOS
  loginCommerce: async function(req, res){
    console.log("Logeando como comercio");
    passport.authenticate('local.signin', {
      successMessage: res.sendStatus(200), // Usuario logeado
      failureMessage: res.sendStatus(400), // Usuario no identificado
    });
  },
  getProducts: async function(req, res) {
    // FALTA COMPROBAR QUE ESTO ES ASÍ
    // (creo que no)
    console.log("Get Products")
    console.log(req.body)
    const list = await commerceModel.getProducts(req.body.username);
    res.send(list)
  },
  addProduct: async function(req, res) {
    console.log(req);
    commerce = req.body.commerceName;
    idProduct = Math.random();
    product = {
      codprod: idProduct,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio, 
      descuento: req.body.descuento,
      cantidad: req.body.cantidad,
      imagen: req.body.imagen,
    };
    console.log(product);
    

    // hacemos pequeñas comprobaciones
    /*if(product.nombre == "" || product.descripcion == "" || product.precio == "" || product.descuento == "" || product.cantidad == ""){
      res.sendStatus(400);
    }else{*/
        const validate = await commerceModel.addProduct(product);
        res.sendStatus(201);
    //  }
    }
};
