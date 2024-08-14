//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
var password = "";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyCheck);

function bodyCheck(req,res,next) {
    password = req.body.password;
    next();
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => {
    if(`${password}` === 'ILoveProgramming') {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, (req,res)=> {
    console.log(`Server is running on port number ${port}.`);
});
