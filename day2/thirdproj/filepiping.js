
// Duplex
var fs = require('fs');
var fiName = "C:\\DelhiOfficeFiles\\sopradata2.csv";
var fiNamea = "C:\\DelhiOfficeFiles\\sopradata2a.csv";
var rs = fs.createReadStream(fiName);
var ws = fs.createWriteStream(fiNamea);
rs.pipe(ws);
console.log("Finished Piping!");