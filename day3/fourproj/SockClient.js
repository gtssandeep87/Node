const net = require('net');
const client = net.createConnection({ port: 9898 }, () => {
    console.log("CLIENT:Connected to server");
    client.write("Hello Server Client this side");
});
client.on('data', (data) => {
    console.log(data.toString());
    client.write("Finished Recieving data thanks....!");
    // client.end();
});
client.on('end', () => {
    console.log("Disconnected!");
});