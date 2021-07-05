const express = require("express");

const router = express.Router();

const role = 1


router.get("/getproducts"    , (req,res) => {

    res.status(200).json({Product1 : "Book" , product2 : "Pen" })

} )


module.exports = router