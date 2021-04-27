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
  async addProduct(commerce, product){
    // comprobamos que exista el comercio

    
    const res = commerceDao.addProduct(commerce, product);
  }
};