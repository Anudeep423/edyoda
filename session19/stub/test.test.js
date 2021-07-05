const {expect} = require("chai");

const request = require("supertest");

const sinon = require("sinon");

const database = require("./database");

const app = require("./index")


describe("Testing /get/:username Get Route" , () => {
    it("user will be found" ,  async () => {

        const fakeData= {
            name : "joe",
            email : "joe@gmail.com"
        }

        const stub = sinon.stub(database , "getUser").resolves(fakeData)


      await  request(app)
             .get("/get/:joe")
             .expect(200)
             .expect(fakeData)

             stub.restore()

    }      )
} )


describe("Checking if the user exist in database" , () => {
    it("404 found"  , async () => {

        const stub = sinon.stub(database , "getUser").resolves(null)

      await  request(app).get("/get/rahul").expect(404)

      stub.restore()

    }  )
} )


describe("Checking for any unexpected condition" , () => {


    it("Sends 500 status" , async () => {

        const stub = sinon.stub(database , "getUser").throws({Error : "unexpected error"})

        await request(app).get("/get/joe").expect(500)

        stub.restore()


    } )


}  )