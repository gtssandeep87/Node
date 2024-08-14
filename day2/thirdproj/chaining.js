// Transform
var fs = require('fs');
var zlib = require('zlib');
var fiName = "C:\\DelhiOfficeFiles\\sopradata2.csv";
var targ = "C:\\DelhiOfficeFiles\\sopradata2.csv.gz";
fs.createReadStream(fiName)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(targ));
console.log("File zipped!");