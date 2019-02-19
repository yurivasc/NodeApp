const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("form.hbs", {name: "yuri"});
});

app.get("/sendformGET", (req, res) => {
    
    console.log(req.query);
    res.send("see console node");
});

app.post("/sendformPOST", (req, res) => {
  console.log(req.body.idade); //output: shows what was written..
  res.send("see console node");
});

app.listen(3000, console.log("listening on port 3000"));
