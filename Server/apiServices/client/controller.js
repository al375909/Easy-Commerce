const clientModel = require("./model");

module.exports = {
    addOrder: async function (req, res) {
        console.log("controller antes", req.body);
        const paymentMethod = req.body.paymentMethod;
        const commerceName = req.body.commerce;
        const clientName = req.body.client;


        const items = req.body.products;



        const inserted = await clientModel.addOrder(clientName, commerceName, paymentMethod, items);
        console.log("controller despues", inserted);

        if (!inserted) {
            res.send("ERROR: PRODUCTO INEXISTENTE O DATOS NO CORRECTOS");
            return;
        }
        res.sendStatus(201);
        return;
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
    getOrders: async function (req, res) {

        const orders = await clientModel.listOrder(req.query.username, req.query.type);
        res.send(orders);
    },
    getOrder: async function (req, res) {
        const id = req.query.orderId;
    }
}