var sql = require("mssql");
var { config } = require("./sqlconfig");

class MyConnection {
  connect() {
      console.log('connecting to sql');
    sql.connect(
      config,
      function(err) {
        if (err) console.log(err);
      }
    );
  }
}

module.exports = {
    MyConnection
};
