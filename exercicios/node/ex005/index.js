const express = require("express");

const server = express();
const cursos = ["JAVA", "JavaScript", "Python", "C#"]

//endpoint com route params
server.get('/cursos/:id', (req, res) => {
    console.log("Acessou");
    const id = req.params.id;
    return res.json({curso: cursos[id]});
})

server.listen(8080);