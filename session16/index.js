// Using web sockets create a chat application where a message sent by a client is received by all the clients via the server.

const express = require("express");

const app = express();

const http = require("http").createServer(app)

const io = require("socket.io")(http)

const port = 8080;

app.use(  express.static( __dirname + "/public"   ) )

io.on("connection" , (socket) => {
    console.log(`user connected`)
    socket.on("message" , (msg) => {
        io.emit("message" , msg )
    } )
} )



http.listen(port  , () => {
    console.log(`server started running on port ${port}`)
} )