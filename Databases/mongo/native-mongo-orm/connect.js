//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
    if (err) {
        return console.log(`Unable to connect ${err}`);
    }

    console.log("Connected to mongodb");

    const db = client.db("test");

    db.collection('todos').insertOne({
        text: `something new + ${Math.random}`,
        completed: true,
        age: 23
    }, (err, result) => {
        if (err) {
            console.log("unable to insert record")
        }
        console.log(`inserted id ${result.insertedId}`);
        console.log(`inserted at ${result.ops[0]._id.getTimestamp()}`);
    })

    client.close();
})