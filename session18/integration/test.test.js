const {expect} = require("chai")

const request = require("supertest");

const app = require("./index");


// describe("Testing Get Route" , () => {
//     it("It should return status 200", function(done){
//         request(app)
//         .get("/")
//         .expect(200 )
//         .expect(/hello/ , done)

//     }  )
// } )


// describe("POST" , function(){
//     it("it should redirect and give a response Welcome" , function(done){
//         request(app)
//         .post("/login")
//         .expect(302)
//         .expect("Location" , /\/home/ ,  () => {
//             request(app)
//             .get("/home")
//             .expect(206 )
//             .expect(/Welcome/, done)
//         }  )

//     } )
// })