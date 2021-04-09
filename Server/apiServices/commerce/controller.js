const commerceModel = require("./model");

module.exports = {
  getCommerce: async function(req, res) {
    console.log("que diuen");
    const q = await commerceModel.listCommerce();
    console.log(q);
    res.send(q);
  },
  createCommerce: async function(req, res){
    console.log("que diuen");
    const q = await commerceModel.createCommerce({
        // Aquí le pasamos atributos básicos para la creación de un comercio
        //username: req.body.username,
        //password: req.body.password,
        //email: req.body.email,
    });
    console.log(q);
    res.send(q);
  },
};
