const {MongoClient} = require("mongodb");


const getUser = async (username) => {

    const client = await MongoClient.connect("mongodb string" ,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    } )

    const db = client.db("SAMPLEDATABSE")

    const user = db.collection("users").findOne({ username : username  })

    client.close()

    return user

}

module.exports = {
    getUser
}