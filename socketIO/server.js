var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/socketIO.html");
});

io.on("connection", socket => {
  console.log("someone connected to socket io");

  //simple emit
  socket.emit("simpleEvent", () => {
    console.log("myCustomEvent backend.");
  });

  //emit with data
  socket.emit("myCustomEvent", { data: "testing data" }, () => {
    console.log("myCustomEvent backend.");
  });

  socket.on("emitfromclient", data => {
    console.log(data);
  });
});

io.on("disconnect", () => {
  console.log("someone disconnected to socket io");
});

http.listen(3000, () => {
  console.log("3000");
});
