import express from "express";
const app = express();
const port = process.env.PORT;

app.get("/", (req, res)=>{
    console.log(req.rawHeaders);
    res.send(`<h1>Hello from Express and node. on port ${port} and NODE_ENV is ${process.env.NODE_ENV}</h1>`)
});

app.get("/home", (req, res) => {
    res.send('This is my home page.');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});