// const imported = require("./app");

// console.log(imported);













// global.console.log(__dirname)

// console.log(` file name  =   ${__filename}`)





// const path = require("path");

// console.log( path.basename(__filename)  )

// const Path = path.join(__dirname, "f1" , "innerf1"  )

// console.log(Path)


// const util = require("util");

// util.log("Hello")

// the difference between util and console log is we need to require util and util gives us time 




const fs = require("fs");

// const files = fs.readdirSync("./f1");

// console.log(files);

console.log("BEfore");

// fs.mkdir("sampledir", (err) => {
//     if(err){
//         return "Error"
//     }
//     console.log("Dir created")
// }

// );

console.log("after");

























// const express = require("express");

// const app = express();

// const port = 8080;

// var MongoClient = require("mongodb").MongoClient;

// MongoClient.connect("mongodb+srv://Anudeep:12345@cluster0.txopa.mongodb.net/facebook?retryWrites=true&w=majority" ,{useUnifiedTopology: true } , (err,db) => {
//     if(err){
//        console.log(err)
//     }
//     var database = db.db("facebook"); 

//     database.collection("users").findOne({  } ,  (err,result) => {
//         if(err){
//             console.log(err)
//         }
//         console.log(result);
//         db.close();

//     }    )

// }   )




// // const role = 0

// // const isAdmin = (req,res,next) => {

// //     if(role === 1){
// //         next()
// //     }else{
// //         return res.json({error : "you are not an admin"})
// //     }
    
// // }


// // app.get("/products" , 
// // isAdmin
// // , (req,res) => {
// //     res.json({product1 : "Bike" , product2 : "Car" })
// // } )


// app.listen(port , () => {
//     console.log(`server started runnig on port ${port} `)
// }  )


