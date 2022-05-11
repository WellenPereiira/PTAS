var express = require("express");
var app = express();
var { usuario } = require("./models")
var { empresa } = require("./models")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// ROTAS PARA USUÁRIO

app.get("/usuarios", async function(req, res) {
  var resultado = await usuario.findAll(req.body);
  res.json(resultado);
});

app.get("/usuarios/:id", async function(req, res) {
  var resultado = await usuario.findOne({where:{ id:req.params.id }});
  res.json(resultado);
});

app.post("/usuarios", async function(req, res) {
  var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios/:id", async function(req, res) {
  var resultado = await usuario.update(req.body, {where:{ id:req.params.id }});
  res.json(resultado);
});

app.delete("/usuarios/:id", async function(req, res) {
  var resultado = await usuario.destroy({where:{ id:req.params.id }});
  res.json(resultado);
});

// ROTAS PARA EMPRESA

app.get("/empresas", async function(req, res) {
  var resultado = await empresa.findAll(req.body);
  res.json(resultado);
});

app.get("/empresas/:id", async function(req, res) {
  var resultado = await empresa.findOne({where:{ id:req.params.id }});
  res.json(resultado);
});

app.post("/empresas", async function(req, res) {
  var resultado = await empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresas/:id", async function(req, res) {
  var resultado = await empresa.update(req.body, {where:{ id:req.params.id }});
  res.json(resultado);
});

app.delete("/empresas/:id", async function(req, res) {
  var resultado = await empresa.destroy({where:{ id:req.params.id }});
  res.json(resultado);
});

app.listen(3000, function() {
  console.log("O servidor está legalzão, está bruto demais e fumegando");
});

//3 formas de pegar a url
//http://luizpicolo.com.br/inserir:?id=123 req.query.id
//http://luizpicolo.com.br/inserir/123 req.params.id
//http://luizpicolo.com.br/inserir     req.body.id
//https://sequelize.org/docs/v6/core-concepts/model-querying-finders/