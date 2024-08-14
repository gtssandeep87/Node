import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    console.log(req.rawHeaders);
    res.send('<h1>Hello from Express and node.</h1>')
});

app.get("/home", (req, res) => {
    res.send('This is my home page.');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});