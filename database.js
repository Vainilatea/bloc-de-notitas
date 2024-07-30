const mysql = require('mysql');

let con = mysql.createConnection({
  host: "192.168.1.224",
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

/*
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
*/

con.connect(function (err) {
  if (err) {
    throw err;
  }
  // const notaEnBase = obtenDelConector.getNotesValues();
  const sql = `INSERT INTO nota (user_id, nota) VALUES ('1', '${notaEnBase[0]}');`

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
  });

  con.end();
});

/*function insertarNotaEnBase() {
for (i in notaEnBase) {
  const sql = `INSERT INTO nota (user_id, nota) VALUES ('${i}', '${notaEnBase[i]}');`*/
