const express = require('express')
var bodyParser = require('body-parser');

const app = express()
const port = 3000


app.use(bodyParser.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public'));

app.get('/a', (req, res) => {
    res.send('')
})

app.post('/guardar-nota', (req, res) => { 
    console.log("Guarda nota aqui")
    console.log(req.body.nota)
    res.send("JAJAJAJAJJA " + Math.random())
})

app.listen(port, () => {
    console.log(`Notitas app listening at http://localhost:${port}`);
})
