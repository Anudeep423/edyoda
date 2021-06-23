const express = require("express");

const app = express();

const port = 8080;

const mongoose = require("mongoose");

const userRoutes = require("./view/user")

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(userRoutes)

mongoose.connect("mongodb+srv://Anudeep123:12345678aA$@cluster0.ni9vp.mongodb.net/Sample?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true }).
then( () => {console.log(`DB CONNECTEd`)} )
.catch( (err) => {console.log(err)}  )  

app.listen(port , () => {
    console.log(`server started running on port ${port}`)
} )