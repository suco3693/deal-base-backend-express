import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/v1/user", (req,res)=>{
    // tslint:disable-next-line:no-console
    console.log(req.body);
    res.send("User ID");
})

app.post("/api/v1/deal", (req,res)=>{
    res.send("Deal Posted");
})

app.listen(port, ()=>{
    // tslint:disable-next-line:no-console
    console.log(`Listening on ${port}`)
})