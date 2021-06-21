const express = require("express");

const app = express()

const port = 8080

const mongoose = require("mongoose");

const userRoutes = require("./view/user")

const bodyParser = require("body-parser")

mongoose.connect("mongodb+srv://Anudeep123:12345678aA$@cluster0.ni9vp.mongodb.net/Sample?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true } )
.then(  () => {console.log(`Database connected`)}   )
.catch( (err) => { console.log(`error occured ${err}`)   }  )

app.use(bodyParser.json()) 

app.use(userRoutes)

app.get("/getroute" , (req,res) => {
    res.json("/ route")
} )

app.listen(port , () => {console.log(`server started running on port ${port} !!`)}  )