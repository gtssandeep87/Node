var express = require('express');
const { retList } = require('./lbook');
var app = express();
var menu = "<br/><table border=1><tr><td><a href=\"./home\">Home</a></td><td><a href=\"./about\">About Us</a></td><td><a href=\"./contact\">Contact Us</a></td><td><a href=\"./projects\">Projects</a></td></tr></table><br/>";
app.get("/home", (req, res) => {
    var str = '<center><table border=1><thead><tr><th>Name</th><th>Author</th></tr></thead><tbody>';
    let arr = retList();
    for (let i = 0; i < arr.length; i++) {
        str += "<tr><td>" + arr[i].bname + "</td><td>" + arr[i].bauth + "</td></tr>";
    }
    str += "</tbody></table>"
    res.send(menu + "<h1 style=\"background-color:yellow;color:red\">Home Page Of The Web Site!</h1><br/><hr/><br/>" + str);
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
app.listen(3000, () => {
    console.log("Express Is Up!");
});



// var express = require('express');
// var app = express();
// var menu = "<br/><table border=1><tr><td><a href=\"./home\">Home</a></td><td><a href=\"./about\">About Us</a></td><td><a href=\"./contact\">Contact Us</a></td><td><a href=\"./projects\">Projects</a></td></tr></table><br/>";
// app.get("/home", (req, res) => {
//     res.send(menu + "<h1 style=\"background-color:yellow;color:red\">Home Page Of The Web Site!</h1>");
// });
// app.get("/about", (req, res) => {
//     res.send(menu + "<h1 style=\"background-color:yellow;color:red\">About Us Page Of The Web Site!</h1>");
// });
// app.get("/contact", (req, res) => {
//     res.send(menu + "<h1 style=\"background-color:yellow;color:red\">Contact Us Page Of The Web Site!</h1>");
// });
// app.get("/projects", (req, res) => {
//     res.send(menu + "<h1 style=\"background-color:yellow;color:red\">Projects Page Of The Web Site!</h1>");
// });
// app.listen(3000, () => {
//     console.log("Express Is Up!");
// });