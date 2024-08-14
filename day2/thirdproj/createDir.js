var fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
var fiName = "C:\\DelhiOfficeFiles\\MyTestDirA\\afile.txt";
//fs.mkdir(fiName, () => { });
// var fiNamea = "C:\\DelhiOfficeFiles\\MyTestDirB";
// fs.rename(fiName, fiNamea, () => { });
// fs.rmdir(fiNamea, () => { });
// fs.createWriteStream(fiName);
// var fiNameb = "C:\\DelhiOfficeFiles\\MyTestDirA\\bfile.txt";
// fs.rename(fiName, fiNameb, () => { });
// fs.rm(fiNameb, () => { });
// var fiNamec = "C:\\DelhiOfficeFiles\\MyTestDirA\\acfile.pptx";
// fs.createWriteStream(fiNamec);
var ls = fs.readdirSync("c:\\delhiofficefiles\\");
//only listing dirs
ls.forEach(n => {
    if (n.indexOf(".") > 0) { } else {
        console.log(n);
    }
});
