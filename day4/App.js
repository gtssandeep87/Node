var express = require('express');
var app = express();
app.get("/a", function (req, res) {
    res.send("Coming from Get");
});
app.post("/b", function (req, res) {
    res.send("Coming from Post");
});
app.put("/c", function (req, res) {
    res.send("Coming from Put");
});
app.delete("/d", function (req, res) {
    res.send("Coming from Delete");
});

app.listen(3000, () => {
    console.log("Express App Is Running!");
});