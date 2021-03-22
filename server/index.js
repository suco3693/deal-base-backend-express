const express = require('express');
const {test_connection} = require('../postgres/db');
const {add_user} = require('./controllers/user');

const app = express();
test_connection();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/user", async(req,res)=>{
    add_user(req,res);
})

app.post("/api/v1/deal", (req,res)=>{
    res.send("Deal Posted");
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})