const userSchema = require("../model/user")

const {check, validationResult} = require("express-validator")


exports.register = (req,res) => {

   const errors =  validationResult(req)

   if(!errors.isEmpty()) {
      return res.json( errors.errors[0])
   }

    const user = new userSchema(req.body);

    user.save( (err,user) => {
        if(err){
            res.json({Error  : err})
        }else{
            res.json( {Success : "user registered successfully" , user})
        }
    }  )

} 

exports.getAllUsers = (req,res) => {

    userSchema.find( {} , (err,users) => {
        if(err){
            res.json({Error  : err})
        }else{
            res.json( { users})
        }
    }  )

} 


exports.getuser = (req,res,next,userId) => {
    userSchema.findOne( {_id : userId} , (err,user) => {
        if(err){
            res.json({Error  : err})
        }else{
           req.user = user
           next()
        }
    }  )

}

exports.updateUser = (req,res) => {

    const {_id} = req.user

    userSchema.findByIdAndUpdate({_id} , req.body  , {new : true , useFindAndModify : false} , (err,userToBeUpdated) => {
        if(err){
            res.json(err)
        }else{
            res.json({Success : "User updated" , userToBeUpdated  })
        }
    } )

}


exports.deleteUser = (req,res) => {

    const {_id} = req.user

    userSchema.findByIdAndDelete( _id , (err,deleteUser) => {
        if(err){
            res.json({error  : err })
        }else{
            res.json({Success : "user successfully deleted" , deleteUser })
        }
    }         )



}

