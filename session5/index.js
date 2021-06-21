//take input from the terminal 
// create a file and write data in it 
// read that data from the file 
// after 10 seconds delete the file

// const fs = require("fs")

// process.stdin.on("data" , (data) => {
//     var incomingData = data.toString().trim()
//   fs.writeFile("./data.md" , incomingData , () => {
//       console.log("Done writing data into the file")
//       fs.readFile("./data.md" , "UTF-8" , (err,data) => {
//           if(err){
//             console.log(`error occured ${err}`)
//           }else{
//           console.log(`Done reading the data from file Data - ${data}`)
//                 setTimeout( () => {
//                         fs.unlink( "./data.md" , () => {
//                             console.log("File is deleted")
//                         }  )
//                 } , 10000 )
//           }

//       } )
//   } )
// } )

// setTimeout( () => {} , 4000  )




// var stoptime = 5000

// var waitTime = 500

// var time = 0


//  var stop =  setInterval(()=> {
      
//     time += waitTime
//     console.log(`${time / 1000} seconds have passed `)
//     if(time >= stoptime){
//         console.log(`Its Time to Stop`)
//         clearInterval(stop)
//     }
        
       
//     },waitTime)






  
// const axios = require("axios");

// axios.get("https://randomuser.me/api/").then( res => {console.log(res.data)}  )



// const https = require("https")

// https.get("https://randomuser.me/api/" ,( response) => {

// response.on("data" ,(chunk) => {
//     console.log(chunk.toString())
// } )


// }   )



const LoopNames = (names) => {

    names.map( (data,i) => {
  
    console.log(data)
  
    } )
  
  }
  
  
  
  for(var i = 0 ; i<= 5 ; i++ ){
  
    console.log(`${i}`)
  
    
  
  }
  
  
  
  console.log("Hello")
  
  
  
  setTimeout( () => {
  
    console.log("In SetTimeout with timer 0")
  
    setTimeout( () => {
  
      LoopNames(["Rahul", "Ramesh"])
  
      console.log("Second SetTimeout with timer as 0")
  
      setTimeout( () => {
  
        console.log("Third SetTimeout with timer as 0")
  
      },0)
  
    },0)
  
    
  
    }, 0 )