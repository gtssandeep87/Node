var fs = require("fs");
var data = "";
var fiName = "C:\\DelhiOfficeFiles\\sopradata1.txt";
for (let i = 1; i <= 1000; i++) {
    data += "Sqrt(" + i + ")=" + Math.sqrt(i) + ";";
}
var ws = fs.createWriteStream(fiName);
ws.write(data, 'utf-8');
ws.end();
ws.on('finish', function () {
    console.log("Write Op Complete");
});
ws.on('error', function (e) {
    console.log(e);
});
console.log("Write Completed!");