const express = require("express");

const router = express.Router();

const userSchema = require("../model/user")

router.post("/register" , (req,res) => {

const user = new userSchema(req.body);

user.save(  (err,user) => {
    if(err){
        res.json(err)
    }else{
        res.json({Success : "user registered " , user })
    }
} )

}  )


router.get("/getallusers" , (req,res) => {

    userSchema.find( {} , (err,users) => {
                if(err){
                    res.json(err)
                }else{
                    res.json(users)
                }
    } )

})

router.put( "/updateuser/:id" , (req,res) => {

    var user 

    console.log(req.params.id)

    userSchema.findByIdAndUpdate( req.params.id , req.body , { new : true , findOneAndModify : true } , (err,updatedUser) => {
        if(err){
            res.json(err)
         }else{
             res.json(updatedUser)
         }
    } )
} )



router.delete("/deleteauser/:id" , (req,res) => {

    userSchema.findByIdAndDelete( req.params.id , (err,deleteduser) => {
        if(err){
            res.json(err)
        }else{
            res.json(`deletion success`)
        }
    } )

} )


module.exports = router