const express = require("express");

const router = express.Router();


router.post("/register" , (req,res) => {

    console.log(req.body)

    const {name,email,password,confirmpassword} = req.body;

    if(!name || !email || !password  || !confirmpassword){
        res.status(206).json({Error : "Enter all the fields"})
    }else{


    if(password === confirmpassword){
        res.status(200).json({Success : "User registered"})
    }else{
        res.status(417).json({error : "password and confirm password do not match !"})
    }

}

} )

module.exports = router