const express = require(`express`);

const app = express();



app.get("/",  (req, res) => {
    res.send([1,2,3,4,5]);
});



app.listen(3000,() => "Aplicacao rodando na porta 3000" );