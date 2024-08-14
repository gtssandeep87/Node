// npm i finalhandler
// npm i serve-static
// npm i browser-sync -g
// npm install -g http-server
// browser-sync start --server --port=3001 --files="./public"
// npm i hostr -g
// go to public folder after installing hostr and then tun 'hostr' command on cmd
var http = require('http');
var finalHandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic('./public');
var server = http.createServer(function (req, res) {
    var done = finalHandler(req, res);
    serve(req, res, done);
});
server.listen(3000, () => {
    console.log("File Server is running");
});
