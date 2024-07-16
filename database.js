var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345",
  database: "mysqlNotas"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado a la base de datos");

  con.query("SELECT * FROM notas", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});



