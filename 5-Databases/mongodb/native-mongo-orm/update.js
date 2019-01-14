//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
    if (err) {
        return console.log(`Unable to connect ${err}`);
    }

    console.log("Connected to mongodb");

    const db = client.db("test");

    db.collection('todos').updateOne({ _id: ObjectID("5c1dc967b29a2506ac9c920f")}, {$set: {completed: false}});
    
    // db.collection('todos').findOneAndUpdate({ _id: ObjectID("5c1dc967b29a2506ac9c920f")}, {$set: {completed: false}});

    
    // client.close();
})