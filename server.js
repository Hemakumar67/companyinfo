var express = require('express');
var app = new express();
var bodyParser = require('body-parser')
const {connection } = require('./db');
connection();
const route = require('./router/route');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api',route);



app.listen('3000',(req,res)=>{
    console.log('Server is started');
})