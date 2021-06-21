const express = require("express");

const http = require("http")

const bookRoutes = require("./views/bookRoutes")

var bodyParser = require('body-parser')


const app = express();

const port = 8080

const role = 1


// app.use((req,res,next) => {
//     console.log("Global Middleware")
//     next();
// } )

app.use(bookRoutes);

app.use(bodyParser.json())


app.post("/" , (req,res) => {
    console.log(req.body.Name)

    res.json("This is a post request")

} )




app.use("*" , (req,res) => {
    
    res.sendFile( __dirname + "/index.html"  )
} )


const isAdmin = (req,res,next) => {
    if(role === 1){
        next()
    }else{
        res.json("You are not an admin")
    }

}






app.listen(port, ( ) => {
    console.log(`server started running on port ${port} `)
} )



// <”luke”, “shaw”>;
// <”wayne”, “rooney”>;
// <”rooney”, “ronaldo”>;
// <”shaw”, “rooney”>;









