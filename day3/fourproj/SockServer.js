const net = require('net');
const { creaList } = require('./lbooks');
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString());
    });
    // socket.write("Server: Sending hai to client!");
    // socket.end("Server Closing Connection!");
    creaList().forEach(n => {
        setTimeout(() => {
            socket.write(JSON.stringify(n));
        }, 3000);
    });
}).on('error', (err) => {
    console.log(err);
});
server.listen(9898, () => {
    console.log("Opened The Server!");
});