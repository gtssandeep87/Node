var fs = require('fs');
const { retList } = require('./mylists');
var exec = require('child_process').exec;
exec('code ' + "c:\\delhiofficefiles\\mycarsdata.json", (err, stdout, stdin) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
});

function extFun() {
    var ws = fs.createWriteStream("c:\\delhiofficefiles\\mycarsdata.json");
    const str = JSON.stringify(retList());
    ws.write(str, 'ascii', () => { });
    ws.end();
    ws.on('finish', function () {
        console.log("Done writing to disk!");
    });
    ws.on('error', function (e) {
        console.log(e);
    });
}