const commerceDao = require('./dao');

module.exports = {
  async listCommerce(){
    return await commerceDao.listCommerce();
  },



  // Recibe un objeto JS de comercio
  async createCommerce (commerce) {
    return commerceDao.createCommerce(commerce);
  }, 



  async getProducts(commerceName){
    return commerceDao.getProducts(commerceName);
  },



  async getCommerce(commerceName){
    const res = commerceDao.getCommerce(commerceName);
    if(res > 0){
      return res;
    }
  },



  async loginCommerce(username, password){
    const res = commerceDao.loginCommerce(username, password);
  },


  
  //  TODOO: TERMINARLO BIEN Y HACER EL LOGIN (COMO MINIMO)
  async addProduct(commerce, product){
    // comprobamos que exista el comercio

    if(commerceDao.getCommerce(commerce)){ // si existe el comercio al que asignar el producto
      const product = commerceDao.addProduct(commerce, product);
    }
  }
};