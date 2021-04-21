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
    const list = await commerceModel.getProducts(req.body.username);
  }
};
