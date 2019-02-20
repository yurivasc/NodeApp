//using Robo3T

//CRUD MONGO DB


//insertOne takes a obj as parameter
db.users.insertOne({ name: "Mariana", age: 27 })


//insertOne with nested obj
db.users.insertOne({ fullname: { firstname: "yuri", lastname: "vasconcelos" } });


//insertMany takes an array of objects as parameter
db.users.insertMany([{ name: "Mariana", age: 27 }, { name: "Joao", age: 30 }]);


//select
db.users.find();


//select conditional
db.users.find({ name: "yuri" })


//select using limit - same as top X // take
db.users.find().limit(2);

//select using distinct
db.users.distinct("name");



//query nested documents
db.users.find({ fullname: { firstname: "yuri", lastname: "vasconcelos" } });


//howeveer when passing only one property of fullname object, it does not return
db.users.find({ fullname: { firstname: "yuri" } });


//we can archieve this by using the following syntax 
db.users.find({ "fullname.firstname": "yuri" });


//adding two conditions: greater than and lower than
db.users.find({ age: { $gt: 15, $lt: 50 } })


//update: 
db.users.updateOne(
    { name: "Joao" },
    { $set: { "age": 99 }, $currentDate: { lastModified: true } }
)

db.users.find({ name: "Joao" });


//deletes
db.users.deleteOne({ name: "Jose" });
db.users.deleteMany({ name: "Jose" });


//getting the result of an operation to a variable and print it.. 
var x = db.users.deleteOne({ name: "Jose" });
print("deletado:" + x.deletedCount);



