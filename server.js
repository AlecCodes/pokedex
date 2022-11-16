const express = require("express")
const app = express();
const pokemons = require("./models/pokemon.js")

//INDEX route
app.get("/pokemon", (req,res) =>{
    res.render("index.ejs",{pokemons})
})

//SHOW route
app.get("/pokemon/:id",(req,res) =>{
    res.send(req.params.id)
})

app.listen(3000, ()=>{
    console.log('NOW WERE COOKING')
})