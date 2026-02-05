const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { //prima rotta preincipale
    res.send('<h1>Server del mio blog</h1>') //il type di default é 'html'
})

app.listen(port, () =>{
    console.log(`esempio di app in ascolto sulla porta ${port}`); //tempalte litteral perche se in ambiente js
})