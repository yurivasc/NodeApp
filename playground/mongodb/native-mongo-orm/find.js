//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
    if (err) {
        return console.log(`Unable to connect ${err}`);
    }

    console.log("Connected to mongodb");

    const db = client.db("test");

    // db.collection('todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log(docs[0]);
    // }, (err) => {
    //     console.log(err);
    // });


    // db.collection('todos').find({ _id: ObjectID("5c1dc8bd6965a44284fb674c") }).toArray().then((docs) => {
    //     console.log(docs[0]);
    // }, (err) => {
    //     console.log(err);
    // });


    db.collection('todos').countDocuments({completed: false}).then((count, err) => {
        console.log(count);
    });

    // client.close();
})