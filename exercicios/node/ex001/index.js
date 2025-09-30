const express = require("express");

const server = express();

server.get("/node", () => {
    console.log("Acessou");
})

server.listen(3000);