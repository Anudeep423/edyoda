const express = require("express");

const app = express();

const port = 8080;

app.get("/home" , (req,res) => {
    res.status(206).json("Welcome")
} )

app.post("/login" ,  (req,res) => {
    res.redirect("/home")
} )

app.get("/" , (req,res) => {

    res.status(200).json("hello")

} )



app.listen(port , () => {
    console.log(`server started running on port ${port}`)
} )

module.exports = app