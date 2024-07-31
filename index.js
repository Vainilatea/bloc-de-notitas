const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/a', (req, res) => {
    res.send('')
})

app.post('/guardar-nota', (req, res) => { 
    console.log("Guarda nota aqui")
    console.log(req.query.datos)
    res.send("JAJAJAJAJJA " + Math.random())
})

app.listen(port, () => {
    console.log(`Notitas app listening at http://localhost:${port}`);
})
