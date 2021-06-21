

const fs = require("fs")

// const files = fs.readdirSync("./samplefolder");

// console.log(files)


// fs.readdir( "./samplefolder" , (err,files) => {

//     if(err){
//         console.log(err)
//     }else{
//         console.log(files)
//     }



// } )


// reading from files



// const Text = fs.readFileSync("./samplefolder/readme.md", "utf-8")

// console.log(Text)

// console.log("After readdirsync")


// fs.readFile("./samplefolder/readme.md" ,  "utf-8" , (err,text) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(text)
//     }
// } )







// fs.writeFile( "./samplefolder/readme.md" , text.trim() , (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("text written in readme file")
//     }
// }  )



// creating a folder



// if( fs.existsSync("folders")){
//     console.log("Folder already exists")
// }else{
//     fs.mkdir( "folders" , (err) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log("FOLDER is created ")
//         }
//     }  )
// }



// fs.mkdir( "samplefolder/folder" , (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("FOLDER is created ")
//     }
// }  )


const text = " text being added again"



// fs.writeFile( "./samplefolder/readme.md" , text.trim() , (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("text written in readme file")
//     }
// }  )


// delete a file 

// fs.unlinkSync("./samplefolder/f1.js")


// fs.appendFileSync( "./samplefolder/readme.md" , text.trim() )




// callback hell

// function delay(  seconds , callback  ){
//     setTimeout( callback , 1000 * seconds  )
// }


// delay( 1 , (err,data) => {
//     console.log(`called after 1 second`)
//     delay( 2 , () => {
//         console.log(`called after 3 seconds`)
//         delay( 2 , () => {
//             console.log(`called after 5 seconds`)
//         }  )
//     }   )
// } 

// )




// promises

// var delay = (seconds) => new Promise( (resolve, reject ) => {

//     if(seconds  > 3 ){
//         return reject(  `${seconds} are just too long to wait`  )
//     }
//     setTimeout( () => { 
//         console.log(`succesfully waited ${seconds} seconds `)
//         return resolve(`succesfully waited ${seconds} seconds `)
//      } , seconds * 1000  )

// }  )


// delay(1)
// .then(  () => delay(2)  )
// .then(  () => {delay(4)}   )
// .then( () =>  delay(2)  )
// .then( () => {console.log(`successfully completed everything`)}  )
// .catch( (err) => {console.log( ` Error Message   ${err} ` )}  )





// async await 





// var delay = (seconds) => new Promise( (resolve, reject ) => {

//     setTimeout( () => { 
//         resolve(`waiting ${seconds} seconds`)
//      } , seconds * 1000  )

// }  )

//  async function start(){
// const res  =   await   delay(2);

// console.log(res)
//  const res2 =  await  delay(1);

// console.log(res2)

// const res3 = await   delay(3);

// console.log(res3)



  
// }

// start();




// process 



// process.stdout.write("Hello ")
// process.stdout.write("Hello")





// const question = [
//     `how are you ?`,
//      ` where are you from ?  `,
//      `  what is your age   `
// ]

// var index = 0

// let answers = [];

// const askQuestion = (ind) => {
//     process.stdout.write(`${question[ind]}`)
// }


// askQuestion(index)


// process.stdin.on( "data" , (data) => {
//     answers.push(data.toString().trim())
//     index ++
//     if(index  > question.length  - 1   ){
//         console.log(`ANSWERS -----------`)
//         question.map( (data,i) => {
//             console.log(`${data}  ${answers[i]} `  )
//         } )
//         process.exit();
//     }
//     askQuestion(index)
    
// }   )







