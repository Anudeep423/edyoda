const express = require("express");

const router = express.Router();


// app.get('/getproducts',(req,res)=>{
//     res.json({product : "car", product2 : "bike"})
// })

const user = "admin"

router.get("/getproducts" , (req,res,next) => {

    if(user === "admin"){
        next()
    }else{
    res.status(401).json({ Error : "You are not an admin "})
    }

}  , (req,res) => {
    res.json({product : "car", product2 : "bike"})
}  )


module.exports = router