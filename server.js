const express = require("express")
const app = express();
const pokemons = require("./models/pokemon.js")
const methodOverride = require("method-override")

//////////////////////////////////////
//MIDDLEWARE
//////////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride("_method"))

//INDEX route
app.get("/pokemon", (req,res) =>{
    res.render("index.ejs",{pokemons})
})

//NEW route
app.get("/pokemon/new",(req,res) =>{
    console.log("Here's the params:" +req.body)
    res.render("new.ejs")
})

//CREATE route
app.post("/pokemon",(req,res)=>{
    pokemons.push(req.body)
    res.redirect('/pokemon')
})

//EDIT Route
app.get("/pokemon/:id/edit",(req,res)=>{
    res.render("edit.ejs",{
        pokemon : pokemons[req.params.id],
        index : req.params.id
    })
})

//SHOW route
app.get("/pokemon/:id",(req,res) =>{
    res.render("show.ejs",{
        pokemon : pokemons[req.params.id],
        index : req.params.id
    })
})

app.listen(3000, ()=>{
    console.log('NOW WERE COOKING')
})