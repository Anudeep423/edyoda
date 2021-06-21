const express = require("express");

const router = express.Router();



const {saveUser,getAllUsers} = require("../controller/user")


router.post("/register" , saveUser )


router.get("/getallusers" ,  getAllUsers)

module.exports = router