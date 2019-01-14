var express = require("express");
var app = express();
var sql = require("mssql");
var config = require("./sqlconfig").config;

app.get("/sql", (req, res) => {
  sql.close();
  sql.connect(
    config,
    err => {
      if (err) {
        console.log(err);
      }

      var request = new sql.Request();

      request.query(
        "select top 20 * from trn_opportunities",
        (err, recordset) => {
          if (err) console.log(err);
          console.log(recordset);
          res.send(recordset);
        }
      );
    }
  );
});

app.get("/", (req, res) => {
  res.send("ok");
});

var server = app.listen(3000, function() {
  console.log("Server is running..");
});
