// // Create a web server using HTTP module and implement 3 routes, "/" route should print "Hello World" 
// // which has to be in the HTML file, "/books" route prints object of books,"/video" should display any
// // video on the browser and also mention command for Garbage collection in comments.

// // const http = require("http");

// // const fs = require("fs");

// // const port = 3000

// // const file = "./dolphin.mp4"

// // const server = http.createServer( (req,res) => {

// //     if(req.url === "/"){
// //       fs.readFile("index.html" , (err,data) => {
// //           if(err){
// //               console.log(`Error occured ${err}`)
// //           }else{
// //               res.write(data)
// //               res.end()
// //           }
// //       } )
// //     }

// //     if(req.url === "/books"){
// //         res.write( JSON.stringify({Book1 : "HarryPotter" , Book2 : "C++" }     )  )
// //         res.end();
// //     }

// //     if(req.url === "/video"){
// //         res.writeHead(200, {'Content-Type' : 'video/mp4' }  )
// //         fs.createReadStream(file).pipe(res)

// //     }


// // }  )

// // server.listen(port, () => {
// //     console.log(`server started running on port ${port}`)
// // })




// // Show the output of the code and explain it in steps what is happening behind the scene in 
// // Eventloop, Node Api's, callback queue, call stack, and also explain what is the event loop, call stack
// // and callback queue then explain what is callback hell and what is a better alternative for it? solve
// // the callback hell which has occurred in the code and implement a better alternative for it. Hint - Promises.



// // const LoopNames = (names) => {

// //     names.map( (data,i) => {
  
// //     console.log(data)
  
// //     } )
  
// //   }
  
  
  
// //   for(var i = 0 ; i<= 5 ; i++ ){
  
// //     console.log(`${i}`)
  
    
  
// //   }
  
  
  
// //   console.log("Hello")



//   var delay = (seconds,message) => new Promise( (resolve,reject) => {

//     setTimeout( () => {
//         console.log(` ${message} with timer ${seconds} seconds`)
//         resolve(`resolved `)
//     }, seconds * 1000  )


//   }  )


//   async function start(){

//   const response =  await delay(1);

//   console.log(`response ${response}`)



//   console.log(`after first delay`)

//   }

//   start();


// //   delay(0,`First SetTimeout`)
// //   .then( () => {
// //     LoopNames(["Rahul", "Ramesh"])
// //     delay(0,`second setTimeout`)
// //   } ).then(  () => {  delay(0 , `Third setTimeout`)  } )
// //   .catch( err => console.log(`error caught ${err}`)  )
  
  
  
// //   setTimeout( () => {
  
// //     console.log("In SetTimeout with timer 0")
  
// //     setTimeout( () => {
  
// //       LoopNames(["Rahul", "Ramesh"])
  
// //       console.log("Second SetTimeout with timer as 0")
  
// //       setTimeout( () => {
  
// //         console.log("Third SetTimeout with timer as 0")
  
// //       },0)
  
// //     },0)
  
    
  
// //     }, 0 )


