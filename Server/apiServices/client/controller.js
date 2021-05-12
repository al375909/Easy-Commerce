const clientModel = require("./model");

module.exports = {
    addOrder: async function(req, res) {
        const paymentMethod = req.body.paymentMethod;
        const commerceName = req.body.commerce;
        const clientName = req.body.client;


        const items = req.body.products;



        const prodArray = await clientModel.addOrder(clientName, commerceName, paymentMethod, items);
        
        if(!prodArray){
            res.send("ERROR: PRODUCTO INEXISTENTE");
            return;
        }  
        res.sendStatus(201);
        /**
         * 
         * {
         *  client: "El chuken"
         *  paymentMethod : "efectivo" / "tarjeta"
         *  commerce: "asdasada",
         *  
         *  products : [
         *          {
         *              "codprod" : "asas"
         *              "amount" : 1,
         *          }
         *  ],
         *  
         * }
         * 
         */
    },
    getOrders: async function(req, res){
        clientModel.getOrders(req.query.username);
    },
    getOrder: async function(req,  res){
        const id = req.query.orderId;
    }
}