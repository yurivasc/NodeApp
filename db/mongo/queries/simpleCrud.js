//using Robo3T

//CRUD MONGO DB


//insertOne takes a obj as parameter
db.FirstCollection.insertOne({ name: "Mariana", age: 27 })


//insertOne with nested obj
db.FirstCollection.insertOne({ fullname: { firstname: "yuri", lastname: "vasconcelos" } });


//insertMany takes an array of objects as parameter
db.FirstCollection.insertMany([{ name: "Mariana", age: 27 }, { name: "Joao", age: 30 }]);


//select
db.FirstCollection.find();


//select conditional
db.FirstCollection.find({ name: "yuri" })


//select using limit - same as top X // take
db.FirstCollection.find().limit(2);


//query nested documents
db.FirstCollection.find({ fullname: { firstname: "yuri", lastname: "vasconcelos" } });


//howeveer when passing only one property of fullname object, it does not return
db.FirstCollection.find({ fullname: { firstname: "yuri" } });


//we can archieve this by using the following syntax 
db.FirstCollection.find({ "fullname.firstname": "yuri" });


//adding two conditions: greater than and lower than
db.FirstCollection.find({ age: { $gt: 15, $lt: 50 } })


//update: 
db.FirstCollection.updateOne(
    { name: "Joao" },
    { $set: { "age": 99 }, $currentDate: { lastModified: true } }
)

db.FirstCollection.find({ name: "Joao" });


//deletes
db.FirstCollection.deleteOne({ name: "Jose" });
db.FirstCollection.deleteMany({ name: "Jose" });


//getting the result of an operation to a variable and print it.. 
var x = db.FirstCollection.deleteOne({ name: "Jose" });
print("deletado:" + x.deletedCount);



