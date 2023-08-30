const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const db = "jornada-backend";
const client = new MongoClient(url);


async function main(){
console.info("conectando ao banco");
await client.connect();
console.info("Banco de dados conectado");
const db = client.db(dbName);
const collection = db.collection("herois");
}
main();
