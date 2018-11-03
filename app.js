var express = require('express')
var app = express()
var query = require("./query.js")
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/enrollAdmin', async function (req, res) {
    
    const result = await query.getQuery();
    console.log("Result:", result)
    res.send(result)
  })
 
app.listen(3000)
console.log("Server Started");
