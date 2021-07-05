//store a user into databse with fields name , email and passowrd 
const express = require("express");

const app = express();

const port = 8080;

const mongoose = require("mongoose");

const userRoutes = require("./view/user")

const bodyParser = require("body-parser")


mongoose.connect("mongodb+srv://edyoda:12345@cluster0.hrpbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true})
.then( () => {  console.log(`DB CONNECTED`) }    )
.catch( (err) => {console.log(err)}  )

app.use(bodyParser.json())

app.use(userRoutes)


app.listen(port , () => { console.log(`server started running on port ${port}`) } )




