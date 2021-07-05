const express = require("express");

const app = express();

const port = 8080;

const jwt = require("jsonwebtoken")

const bodyParser = require("body-parser")

const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")

const userSchema = require("./model/user")

mongoose.connect("mongodb+srv://Anudeep123:12345678aA$@cluster0.ni9vp.mongodb.net/JWT?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then( () => {console.log(`DB connected`)}  )
.catch( (err) => {console.log(err)}  )

app.use(bodyParser.json() )

app.post("/signup" , (req,res) => {

    var {email,name,password} = req.body

 const hashedPassword =   bcrypt.hashSync(password , 8 )


   const user = new userSchema({email , name , password : hashedPassword})

   user.save( (err, user ) => {

    if(err){
        res.json(err)
    }else{
        res.json(user)
    }
   }  )



} )


app.post("/signin" , (req,res) => {

    const {email,password} = req.body

    userSchema.findOne( { email : email  }  , (err,user) => {

        if(err || !user){
          return  res.json(`no user found with this email`)
        }else{
            bcrypt.compare(password , user.password , function(err,result){
                    console.log(result)
                    if(result === false ){
                        res.json("Incorrect password")
                    }else{
                        const token = jwt.sign( {_id  : user._id , email : user.email  } , "secret" )
                        res.json({token , userId : user._id , email })
                    }
                
            }  )
        }

    }  )



} )

app.get("/products" , (req,res) => {

      const token =   req.headers[`authorization`]

      if(!token){
          res.json("no token found")
      }

         var decoded = jwt.verify( token , "secret"  )

         res.json({product1 : "sample1" , product2 : "samplet2"})
        //  if(!decoded){
        //      res.json("Invalid token")
        //  }

        //  console.log(decoded)

    // res.json({product1 : "sample1" , product2 : "samplet2" })

} )

app.listen( port , () => {
    console.log(`server started on port ${port}`)
}  )


