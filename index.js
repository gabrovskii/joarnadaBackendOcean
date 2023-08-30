const express = require("express");
const app = express();

//habilitamos o processasmento de JSON
app.use(express.json());


app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
    res.send("Hello World do oi");
  });

  //endspoints de herois
  const lista = ["Mulher Maravilha, Capitã Marvel", "Homem de ferro"]
  
  //Real All -> [GET] /herois
  app.get("/herois", function(req, res) { // posso usar tbm o _ no lugar no req já que não estou usando
    res.send(lista);
  }); //declaração básica do endpoint


  //Create -> [POST] /herois
  app.post("/herois",function(req,res){
    //console.log(req.body)

    //extrair o nome do Body da request (corpo da requisição)
    const item = req.body.nome;

    //insere o item na lista
    lista.push(item)

    res.send("item criado com sucesso");
  });

  //Read by Id -> [GET] /herois/:id
  app.get("/herois/:id", function(req,res){
    //pegamos o parametro de rota ID
    const id = req.params.id -1;
    //pegamos a informação da lista
    const item = lista[id];
    //exibimos o item na resposta do endpoint
    res.send(item);
  });

app.listen(3000);