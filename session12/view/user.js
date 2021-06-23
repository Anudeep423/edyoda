const express = require("express");

const router = express.Router();

const {register,getAllUsers,getuser,updateUser,deleteUser} = require("../controller/user")

const {check, validationResult} = require("express-validator")

router.param("user", getuser  )

router.post( "/register" , [check("name" , "name cannot be empty"  ).not().isEmpty(),
check("email" , "should be in email format" ).isEmail()
]  ,register )

router.get( "/getallusers" , getAllUsers)

router.put("/updateuser/:user" , updateUser  )

router.delete("/deleteuser/:user" , deleteUser )


module.exports = router