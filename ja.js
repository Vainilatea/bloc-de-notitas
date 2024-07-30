con.connect(function (err) {
    if (err) {
      throw err;
    }
  
    const patata = 'Potaterias'
  
    const sql = `INSERT INTO nota (user_id, nota) VALUES ('1', '${patata}');`
  
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
    });
  
    con.end();
  }); 
  