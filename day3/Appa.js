var http = require('http');
const { retList } = require('./mylist');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<h1 style=\"background-color:red;color:yellow\">Welcome to NodeJS HTTP Server!</h1><br/>");
    res.write("<h1 style=\"background-color:yellow;color:red\">Another statement!</h1>");
    res.write("<center><table border=1><thead><tr><th>ID</th><th>Name</th><th>Brand</th></tr></thead><tbody>");
    let arr = retList();
    for (let i = 0; i < arr.length; i++) {
        res.write("<tr><td>" + arr[i].id + "</td><td>" + arr[i].name + "</td><td>" + arr[i].brand + "</td></tr>");
    }
    res.write("</table></center>");
    res.end("");
});

server.listen(3000, () => {
    console.log("Server Running!");
});