const commerceModel = require("./model");
const bscrypt = require('bcryptjs');

module.exports = {
  getCommerce: async function(req, res) {
    console.log("Listando comercios");
    const q = await commerceModel.listCommerce();
    console.log(q);
    res.send(q);
  },
  createCommerce: async function(req, res){
    console.log("Signing up");
    const passwordHash = await bscrypt.hash(req.body.password, 10);
    const q = await commerceModel.createCommerce({
        // Aquí le pasamos atributos básicos para la creación de un comercio
        cif: req.body.cif,
        username: req.body.username,
        password: passwordHash,
        email: req.body.email,
        nombre: req.body.nombre,
        altitud: req.body.altitud,
        latitud: req.body.latitud,
    });
    console.log(q);
    res.send(q);
  },
};
