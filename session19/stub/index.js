const express = require("express");

const app = express();

const database = require("./database")


app.get( "/get/:username" , async (req,res) => {

    const {username} = req.params

    try{
    const user = await  database.getUser(username)    
          if(user){
         res.status(200).json(user)
          }else{
              res.status(404).json({Error : "User not found "})
          }
        }catch(e){
            res.status(500).json(e)
        }


}  )

module.exports = app