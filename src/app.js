const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "static")));

let data = {
    'integrantes':[
        {'nome':'Bruna Nizolli Guex Rocha Lourenço'},
        {'nome':'Erika Paola Chermack'},
        {'nome':'Heloiza Costa da Silveira'} 
    ]
}

app.get("/", (req, res) => {
    res.sendFile("views/index.html", { root: __dirname });
  });

app.get('/integrantes', (req, res) => {
    res.json(data)
    })

app.listen(port, () => {
  console.log("Example app listening on port: " + port);
});
