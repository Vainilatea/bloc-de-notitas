let mysql = require('mysql');

let con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "krono",
  database: "proyecto_notas"
});


function imprimirUsuarios(result) {
  result.forEach(user => {
    console.log(`USUARIO: ${user.name}`);
    console.log(`EMAIL:   ${user.email}`);
    console.log('');
  });
  console.log('--------------------------------');
}


con.connect(function (err) {
  if (err) {
    throw err;
  }

  con.query("SELECT name, email FROM user", function (err, result, fields) {
    if (err) throw err;
    imprimirUsuarios(result)

  });

  con.end();
}); 
