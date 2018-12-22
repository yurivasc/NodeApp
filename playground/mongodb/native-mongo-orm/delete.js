//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
    if (err) {
        return console.log(`Unable to connect ${err}`);
    }

    console.log("Connected to mongodb");

    const db = client.db("test");

    db.collection('todos').deleteOne({ _id: ObjectID("5c1dc8bd6965a44284fb674c") });

    
    db.collection('todos').deleteMany({text: "hi"});

    db.collection('todos').findOneAndDelete({completed: false});

    // db.collection('todos').find({teste: "something"}, (err,response) => {
    //     console.log(response);
    // });

    // client.close();
})