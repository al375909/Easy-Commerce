const clientModel = require("./model");

module.exports = {
    addOrder: async function(req, res) {
        const metodo = req.body.payMethod;
        const username = req.body.username;

        const items = req.body.products;

        clientModel.addOrder();

        /**
         * commerce{
         *      username: "asdasada",
         * }
         * product1{
         *      codprod: "adad",
         *      cant: 2
         * }
         */
    },
    getOrders: async function(req, res){

    },
    getOrder: async function(req,  res){
        const id = req.query.orderId;
    }
}