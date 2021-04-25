const express = require("express");
const app = express();

console.clear
app.get("/", (request, response) =>{
    response.send("Hello world")
});

app.listem(3000, () => {
    console.log("O servidor está rodando")
});