const express = require("express");
const app = express();
const port = 3000;

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
