const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { //prima rotta preincipale

    console.log(res);
    
    //creo un oggetto js da inviare nella res

    const posts = {
        title: "Ciambellone",
        body: "il ciambellone é molto buono",
        image: "inserisci url o path img",
        tags: ["super", "top", "lapiubuona"]
    }

    res.json(posts)

    //res.send('<h1>Server del mio blog</h1>') //il type di default é 'html'
})

app.listen(port, () =>{
    console.log(`esempio di app in ascolto sulla porta ${port}`); //tempalte litteral perche se in ambiente js
})