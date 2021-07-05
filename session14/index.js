const express = require("express");

const app = express();

const http = require("http").createServer(app);

const port = 8080;

const io = require("socket.io")(http);

app.use( express.static( __dirname + "/public"  ) )


io.on("connection" , (socket) => {
   
    io.emit("status", "user is connected" )

    socket.on("updatemessage"  , (id,updatedMessage) => {
        console.log(`Called and id  id ${id}`)
            io.emit("updatemessage",id , updatedMessage )
    } )

    socket.on(`deletemsg` , (id) => {
     io.emit(`deletemessage` , id )
    } )

    socket.on("message" , (msg) => {
        console.log(msg)
        io.emit("message", msg )
    }  ) 

    socket.on("disconnect" , () => {
        io.emit("status", "user Disconnected" )
    } )

} )


http.listen( port , () => {
    console.log(`server started running on port ${8080}`)
} )



// const bcrypt = require("bcryptjs");

// const password = "12345"

//  const hasedPassword = bcrypt.hashSync(password , 8 )

//   const result =  bcrypt.compareSync("12345" , "$2a$08$zsYvIto/dj6B0hKWSSTDyeacE59mnJRO.K606/HZT/OQPUopa0C.G"  )

//  console.log(result)