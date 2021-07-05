const axios = require("axios")

exports.sum = (num1 , num2) => {

    return num1 + num2

}

role = 1

exports.isAdmin = () => {

    if(role == 1){
        return "Admin"
    }else{
        return "Not admin"
    }


}


exports.fetchData = () => {

    return new Promise(  (resolve , reject) => {

        axios.get("http://jsonplaceholder.typicode.com/todos/1")
        .then( res => {   resolve(res.data)  }   )
        .catch( err => { reject(err)     }  )
    }  )
}