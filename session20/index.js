// write a simple test where you need to sum 2 numbers and check output

const axios = require("axios")


// test the async code 


// test the "/" route and check status if 200 and expected output is hello

const express = require("express");

const app = express();

app.get("/" , (req,res) => {

    res.status(206).json("hello")

} )

function sum(num1 , num2){

    return num1 + num2

}


function fetchData(){

    return new Promise ( (resolve,reject) => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then( res => {  resolve(res.data) }  )
    .catch( err => {console.log(err)}   )

    }  )
}




module.exports = app