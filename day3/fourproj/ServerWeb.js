// npm i websocket
const http = require('http');
const { creaList } = require('./lbooks');
const WebSocketServer = require('websocket').server;
const server = http.createServer();
server.listen(9898);
const wsServer = new WebSocketServer(
    { httpServer: server }
);
wsServer.on('request', function (request) {
    const connection = request.accept(null, request.origin);
    connection.on('message', function (m) {
        console.log("Recieved message ", m.utf8Data);
        //connection.sendUTF("Hit this is from socket Server of NodeJS");
        var a = creaList();
        connection.sendUTF(JSON.stringify(a));
   });
    connection.on("close", function (r, d) {
        console.log("Client Diconnected!");
    });
});