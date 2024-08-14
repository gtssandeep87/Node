var fs = require("fs");
const { stdout, stdin } = require("process");
var exec = require('child_process').exec;
const pp = "C:\\delhiofficefiles\\atesta.txt";
var ws = fs.createWriteStream(pp);
var cont = "This is test file to be written from nodejs";
ws.write(cont);
exec("notepad " + pp, (err, stdout, stdin) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
});