var http = require('http');

var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    if (req.url == '/form') {
        res.write("<form action=\"./sub\" method=post><table><tr><td>Email</td><td><input type=text name=uname /></td></tr><tr><td>Password</td><td><input type=password name=password /></td></tr><tr><td><input type=submit value=Send /></td><td><input type=reset value=Cancel /></td></tr></table></form>");
        res.end("");
    }
    if (req.url == '/sub') {
        console.log("Form Submitted!");
    }
});

app.listen(3000, () => {
    console.log("Server is running!");
})