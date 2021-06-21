const express = require("express");

const router = express.Router();


router.get("/products"   ,  (req,res) => {

    res.json({Product1 : "Bike" , product2 : "Car" })

} )

router.get("/users"  , (req,res) => {

    res.json({User1 : "Ram" , User2 : "Rahul" })

} )


module.exports = router