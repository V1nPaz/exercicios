const express = require("express")
const server = express();

server.get("/curso", (req, res) => {
    console.log("Rota acessada");
    const nome = req.query.nome;

    return res.json({curso: nome});
})

server.listen(3000);