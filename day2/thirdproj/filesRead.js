//Non Blocking Mode
var fs = require('fs');
var data = "";
var fiName = "C:\\DelhiOfficeFiles\\data.txt";
var rs = fs.createReadStream(fiName);
rs.setEncoding("utf-8");
rs.on('data', (chunk) => {
    data += chunk;
});
rs.on("end", function () {
    console.log(data);
});
rs.on("error", (e) => {
    console.log(e.stack);
});
console.log("Program Ended");