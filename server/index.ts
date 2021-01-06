import express from "express";
import bodyParser from "body-parser";
import database from "../postgres/db";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/v1/user", (req,res)=>{
    console.log("Hello")
    database(req.body,()=>{
        res.send("User ID");
    });
    
})

app.post("/api/v1/deal", (req,res)=>{
    res.send("Deal Posted");
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})