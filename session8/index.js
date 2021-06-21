// start the server by making it listen on 8080 port and create a route "/" on calling it give a response app is working using express.js

// const express = require('express')

// const app = express()

// const port = 8080

// app.get('/', (req, res) => {
//   res.send('App is working using express.js')
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })



// create a file inside a folder views add 2 routes /products and /users display response for it . {product 1 : "Bike"} {user1 : "Rahul"}



  

// define what is a middleware and routes should only be accessible by admin

const express = require("express");

const app = express();

const routes = require("./views/routes")

const userRoutes = require("./views/users")

const bodyParser = require("body-parser")

const http = require("http")


const role = 1

const isAdmin = (req,res,next) => {

    if(role == 1){
        next()
    }else{
    res.json("You are not an admin")
    }

}

app.use(bodyParser.json())

app.use("/user", userRoutes )

app.use("/api",isAdmin,routes);


console.log(http.STATUS_CODES)

app.listen(8080, () => { console.log(`server started running on port 8080`) } )
 
//create a post route "/register" take name , email , password an confirm pasword as inputs if password and confirm passowrd is same 
// then we give a responsee as user register else we show password and confirm password do not match !


