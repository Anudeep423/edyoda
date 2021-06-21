const userSchema = require("../model/user")

exports.saveUser = (req, res) => {

    const user = new userSchema(req.body)


    user.save((err, savedUser) => {

        if (err) {
            res.json({ Error: err })
        } else {
            res.json({ Success: "user registered", savedUser })
        }

    })

}

exports.getAllUsers = (req,res) => {

    userSchema.findOne({email : "rahul@gmail.com" } , (err,users) => {
            if(err){
                res.status(404).json({Error : err})
            }else{
                res.json(users)
            }
    }  )

}