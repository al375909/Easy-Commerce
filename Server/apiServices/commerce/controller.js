const commerceModel = require("./model");

module.exports = {
  async getCommerce(req, res) {
    const q = await commerceMode.listCommerce();
    console.log(q);
    res.send(q);
  },
  async createCommerce(req, res){
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
