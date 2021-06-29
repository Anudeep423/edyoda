const express = require("express");

const router = express.Router();

const chatSchema = require("../model/user")

router.post( "/savemessage" , (req,res) => {

    const chat = new chatSchema(req.body);

    chat.save( (err , savedChat ) => {
        if(err){
            res.json(err)
        }else{
            res.json(savedChat)
        }
    } )


} )

router.get("/getchats" , (req,res) => {

    chatSchema.find( {} , (err,getAllChats) => {

        if(err){
            res.json(err)
        }else{
            res.json(getAllChats);
        }
    
    } )
    
} )


module.exports = router