let mysql = require('mysql');

let conexion = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "krono",
  database: "proyecto_notas"
});

conexion.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("conexion exitosa");
  }
});

conexion.end();
