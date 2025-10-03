const express = require("express");
const server = express();
let cursos = ["JAVA", "Javascript", "Python"];

//Construindo um CRUD
server.use(express.json());

server.use((req, res, next)=> {
    console.log(`URL:  ${req.url}`);
    return next();
});

function checkCurso(req, res, next){
    if (!req.body.nome){
        return res.status(400).json({error : "Nome não enviado"});
    };
    req.nome = req.body.nome;
    return next();
};

function checkIndexCurso(req, res, next){
    if (!req.params.index){
        return res.status(400).json({erro : "Curso não existente"})
    }
    req.index = req.params.index;
    return next();
}

server.get("/cursos", (req, res) => {
    return res.json({cursos: cursos});
});

server.get("/cursos/:index", checkIndexCurso, (req, res) => {
    
    return res.json({curso: cursos[req.index]});
});

server.post("/cursos", checkCurso,(req, res) => {
    cursos.push(req.nome);
    return res.json({cursos: cursos});
});

server.put("/cursos/:index", checkIndexCurso, checkCurso, (req, res) => {
    cursos[req.index] = req.nome;
    return res.json({cursos: cursos});
});

server.delete("/cursos/:index", checkIndexCurso,(req, res) => {

    cursos.splice(req.index, 1);
    return res.json({cursos: cursos});
});
server.listen(3000);