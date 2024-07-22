let mysql = require('mysql');

let conexion = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345",
  database: "mysqlNotas"
});

conexion.connect(function(err){
  if(err){
    throw err;
  }else{
    console.log("conexion exitosa");
  }
});

conexion.end();


