var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { Register } = require('./Register');
var urlEncodedBodyParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("./public"));
app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "./public/index.html");
});
app.post("/p_post", urlEncodedBodyParser, function (req, res) {
    var id = Number.parseInt(req.body.id);
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var regist = new Register(id, name, email, mobile);
    var a = JSON.stringify(regist);
    res.send(a);
});

app.listen(3000, () => {
    console.log("Form Server Is Up");
});
