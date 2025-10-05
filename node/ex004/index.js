const express = require('express');

//Route Params minhaurl/recurso/valor

/*  
const server = express();
server.get('/curso/:id', (req, res) =>{
    const id = req.params.id;
    return res.json({curso: `ID ${id}`})
    })
server.listen(3000);
*/
   

//Query Params minhaurl/recurso?parametro=valor
const server = express();

server.get("/curso", (req, res) => {
    const nome = req.query.nome;

    return res.json({curso: nome})
})

server.listen(3000);