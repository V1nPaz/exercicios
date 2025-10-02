const express = require("express");

const server = express();

server.get("/node", (req, res) => {
    console.log("Acessou");
})

server.listen(3000);