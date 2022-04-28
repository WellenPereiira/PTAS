var express = require("express");
var app = express();
var { usuario } = require("./models")

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", async function(req, res){
    var resultado = await usuario.findAll(req.body);
    res.json(resultado);
});

app.post("/", async function(req, res){
    var resultado = await usuario.create(req.body);
    res.json(resultado);
});

app.listen(3000, function(){
    console.log("O servidor está legalzão, está brugo demais e fumegando");
});

//3 formas de pegar url
//http://luizpicolo.com.br/inserir:?id=123 req.query.id
//http://luizpicolo.com.br/inserir/123 req.params.id
//http://luizpicolo.com.br/inserir     req.body.id
//https://sequelize.org/docs/v6/core-concepts/model-querying-finders/