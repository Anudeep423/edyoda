// const events = require("events");


// const emitter = new events.EventEmitter();

// emitter.on("message", (name,msg) => {

//     console.log(`Message ${msg} send by ${name}`)

// }  )

// process.stdin.on( "data" , (data) =>{

//     var incomingData = data.toString().trim()

//     emitter.emit("message"  , "Terminal"  ,incomingData  )


// }  )


// emitter.emit("message" , "Ram" , "Hi");



// const fs = require("fs");

// const readStream = fs.createReadStream("./readme.md" , "UTF-8" );

// const writeStream = fs.createWriteStream("./writeme.md" , "UTF-8" );


// readStream.on("data" , (data) => {
//     console.log(`i have read ${data.length} characters`)
    

   
// }  )

// readStream.on( "end" , () => {
//     console.log(`completed all the work`)
// }  )

// process.stdin.on("data" , (data) => {
//     writeStream.write(data)
// } )



// readStream.pipe(writeStream);

// fs.readFile( "./readme.md"  , (err,data) => {
// console.log(`i have read ${data.length} characters`)
// } )








// const fs = require("fs");
// const http = require("http")

// const file = "./dolphin.mp4"

// const port = 3000

// const server = http.createServer( (req,res) => {


//     fs.readFile( file , (err,data) => {
//         if(err){
//             console.log(`Error ${err}`)
//         }else{
//             res.writeHead(200 ,  {'Content-Type' : 'video/mp4' })
//             res.end(data);
//         }
//     } )


// } )

// server.listen(3000 , () => {  console.log(`server has started on port ${3000}`)    }  )





// const {createReadStream} = require("fs")


// const server = http.createServer( (req,res) => {

//     res.writeHead(200,  {'Content-Type' : 'Video/mp4' }  )

//     createReadStream(file).pipe(res)



// }   )

// server.listen(3000 , () => {console.log(`server started running on port ${3000}`)})



// const {createReadStream,createWriteStream} = require("fs");



// var file = "./dolphin.mp4"

// const readStream = createReadStream(file);

// const writeStream = createWriteStream("./writeme.mp4" )


// readStream.pipe(writeStream);



// readStream.on( "data" , (data) => {
//    const result =  writeStream.write(data)
//    if(!result){
//        console.log("Back pressure")
//        readStream.pause();
//    }
// })


// writeStream.on("drain" , () => {
//     console.log("Data can now come again")
//     readStream.resume();
// } )





// readStream.on( "end" , () => {console.log("Done")}  )




















 