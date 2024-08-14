var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedBodyParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("./public"));
app.get("/first.html", function (req, res) {
    res.sendFile(__dirname + "/public/first.html");
});
app.post("/p_post", urlEncodedBodyParser, function (req, res) {
    var respo = {
        email: req.body.email,
        password: req.body.password
    }
    console.log(JSON.stringify(respo));
    res.send(JSON.stringify(respo));
});
app.listen(3000, () => {
    console.log("Form Server Is Up");
});