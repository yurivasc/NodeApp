var sql = require("mssql");

config = {
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
}

class MyConnection {
  connect() {
    sql.connect(config, (err) => { if (err) console.log(err); });
  }
}

module.exports = {
  MyConnection
};
