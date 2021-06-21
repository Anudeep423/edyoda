// render a html file using express.static

// const express = require("express");

// const app = express();

// const port = 8080



// app.use( express.static( __dirname + "/public"  )  )




// app.listen(port , () => {
//     console.log(`server started running on port ${port}`)
// } )



// 2) create a get route "/getproducts" and give a response , a 404 error not found if api which is not build is being accessed    


// const express = require("express");

// const app = express();

// const port = 8080






// app.listen(port , () => {
//     console.log(`server started running on port ${port}`)
// } )


const express = require('express')

const app = express()
const http = require("http")
const productRouter = require("./views/products")
const bodyParser = require("body-parser")
// app.use(express.static(__dirname +'/public' ))





app.use("/products",productRouter)

app.use(bodyParser.json())

app.post("/register" , (req,res) => {

console.log("incoming data" , req.body)
if(req.body.password === req.body.confirmPassword ){
    res.status(200).json("user register")
}else{
    res.status(417).json({Error : "Registration failed ! password and confirm password do not match !  " })
}

} )

app.use("*",(req,res)=>{
        res.json("404 : page not Found")
})

app.listen(4000,()=>{
    console.log('server is running');
})


// add this router in a file which has to be in views folder and make that api run 

// why we need to use body parser 

 /* create a post route "/register incomming data should include name , email , password and confirm password 
  if password and confirm password matched  then give a response user register with suitable status code else 
  give a response password and confirm password did not match registration failed give a suitable status code 
 */
