const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({


    name : {
        type : String 
    },
    message  : {
        type : String
    }

})

module.exports = mongoose.model("chat" , chatSchema )