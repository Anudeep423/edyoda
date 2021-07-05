const express = require("express");

const router = express.Router();

router.get("/getusers" , (req,res) => {

    res.status(200).json({User1 : "Rahul" , user2 : "Joe" })

} )


module.exports = router