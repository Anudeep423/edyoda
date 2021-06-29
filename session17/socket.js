const socket = require("socket.io");

let io

module.exports = {

    init : http => {
      io =  socket(http)
      return io
    }


}