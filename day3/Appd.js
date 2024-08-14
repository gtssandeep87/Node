var http = require('http');
const { retList } = require('./mylist');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/json' });
    if (req.url === "/first" && req.method === "GET") {
        var arr = retList();
        res.write(JSON.stringify(arr));
        res.end();
    }
    if (req.url === "/sec" && req.method === "POST") {
        var obj = { name: "Post Request", val: "Some value for post" };
        res.write(JSON.stringify(obj));
        res.end();
    }
    if (req.url === "/third" && req.method === "PUT") {
        var obj = { name: "Put Request", val: "Some value for put" };
        res.write(JSON.stringify(obj));
        res.end();
    }
    if (req.url === "/four" && req.method === "DELETE") {
        var obj = { name: "Delete Request", val: "Some valu for delete" };
        res.write(JSON.stringify(obj));
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running");

})
