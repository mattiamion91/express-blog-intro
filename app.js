const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello mattia')
})

app.listen(port, () =>{
    console.log(`esempio di app in ascolto sulla porta ${port}`); //tempalte litteral perche se in ambiente js
})