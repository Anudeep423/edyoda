const express = require("express");

const app = express();

const http = require("http").createServer(app);

const io = require("./socket").init(http)

const port = 8080

const mongoose = require("mongoose");

const chatRoutes = require("./view/user")

const cors = require("cors");

const bodyParser = require("body-parser")


app.use(express.static(  __dirname + "/public"  )   )

app.use(bodyParser.json());

app.use(cors())

app.use(chatRoutes)

mongoose.connect("mongodb+srv://edyoda:12345@cluster0.hrpbb.mongodb.net/chat?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then( res => {console.log("Connection success")

io.on("connection" , (socket) => {

    socket.on("delete" , (id) => {
        io.emit("delete" , id )
    } )

    socket.on("update" , (update) => {

        io.emit("update",  update)

    } )

    socket.on("message" , (msg) => {
        
       io.emit( "message" , msg )
    

    } )

} )

} )
.catch( err => {console.log(err)}  )



http.listen(port , () => { console.log(`server started running on port ${port}`)  }  )