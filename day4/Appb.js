var express = require('express');
const { retList } = require('./lbook');
const { Books } = require('./Books');
var app = express();
var menu = "<br/><table border=1><tr><td><a href=\"./home\">Home</a></td><td><a href=\"./about\">About Us</a></td><td><a href=\"./contact\">Contact Us</a></td><td><a href=\"./projects\">Projects</a></td></tr></table><br/>";
app.get("/home", (req, res) => {
    var str = '<center><table border=1><thead><tr><th>Name</th><th>Author</th></tr></thead><tbody>';
    let arr = retList();
    for (let i = 0; i < arr.length; i++) {
        str += "<tr><td>" + arr[i].bname + "</td><td>" + arr[i].bauth + "</td></tr>";
    }
    str += "</tbody></table>"
    res.send(menu + "<h1 style=\"background-color:yellow;color:red\">Home Page Of The Web Site!</h1><br/><h1>List Of Books I Own</h1><br/>" + str);
});
app.get("/about", (req, res) => {
    res.send(menu + "<h1 style=\"background-color:yellow;color:red\">About Us Page Of The Web Site!</h1>");
});
app.get("/contact", (req, res) => {
    res.send(menu + "<h1 style=\"background-color:yellow;color:red\">Contact Us Page Of The Web Site!</h1>");
});
app.get("/projects", (req, res) => {
    res.send(menu + "<h1 style=\"background-color:yellow;color:red\">Projects Page Of The Web Site!</h1>");
});
var a = retList();
//Capturing path params
app.get("/add/:bname/:bauth", function (req, res) {
    var bname = req.params.bname;
    var bauth = req.params.bauth;
    var book = new Books(bname, bauth);
    console.log(JSON.stringify(book));
    a.push(book);
    res.send(JSON.stringify(a));
});

app.get("/forma", function (req, res) {
    res.send("<form action=./test>Name:<input type=text name=name />Author:<input type=text name=name /><input type=submit value=send /></form>")
});

//Capturing a query string
app.get("/test", function (req, res) {
    var aa = req.query;
    var book = new Books(aa.name, aa.auth);
    a.push(book);
    res.send(JSON.stringify(a));
});

app.listen(3000, () => {
    console.log("Express Is Up!");
});