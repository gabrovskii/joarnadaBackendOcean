const express = require("express");
const app = express();


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
    res.send("criar registro");
  });

app.listen(3000);