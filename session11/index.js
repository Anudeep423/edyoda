// Create 2 get routes using express Router first route  to display sample products and
//  second to display sample users these routes should be protected and can only be accessible by the admin and
//  if a user who is not an admin is trying to access that API shows a suitable error message,
//  add a 404 error message if an API is being called which has not been created

// const express = require("express");

// const app = express();

// const port = 8080;

// const productRoutes = require("./view/products")

// const userRoutes = require("./view/users")

// const role = 1


// const isAdmin = (req,res,next) => {

//     if(role == 1){
//         next();
//     }else{
//         res.status(401).json("You are not an admin")
//     }

// }


// app.use("/products", isAdmin ,   productRoutes);

// app.use("/users", isAdmin ,  userRoutes)


// app.use("*" ,  ( req,res ) => {

//     res.status(404).json(`404 api not available`)

// }  )


// app.listen( port , () => {
//     console.log(`server started running on port ${port}`)
// } )







// Create a post route where the incoming data includes fields name,
//  email, password, and if all the fields are given then given a response 
// as User Registered else give an error with a suitable response code along with an error message,
//  explain what is middleware and why do we use body-parser?




// const express = require("express");

// const app = express();



// const bodyParser = require("body-parser")

// app.use(bodyParser.json())

// app.post("/register" , (req,res) => {

//     console.log(req.body);

//     const {name,email,password} = req.body

//     if(!name || !email || !password){
//         res.status(417).json("User registration failed Enter all the fields")
//     }else{
//         res.status(201).json("user registered")
//     }

 


// } )

// app.listen(8080 , () => {
//     console.log(`server started running`)
// } )



const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const http = require('http')
console.log(http.STATUS_CODES)

app.use(bodyParser.json())
app.post('/register',(req,res)=>{
        if(!req.body.name || !req.body.email || !req.body.password)
        {       

            res.status(417).json('Registration failed, enter all fields')
                
                
        }
        else{
            res.json('User registered successfully')
            console.log(req.body)
        }
})



app.listen(4000,()=>{
    console.log('server is running')
})
