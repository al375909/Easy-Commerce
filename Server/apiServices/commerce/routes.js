const listCommerce = require("./model");

app.get("/", async (req, res) => {
    const q = await listCommerce();
    console.log(q);
    res.send(q);
});
