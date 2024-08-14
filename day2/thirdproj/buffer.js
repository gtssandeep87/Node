// node --no-deprecation third.js
// buffer are custom data type and it is only used in node js

var bufa = new Buffer(10);
var bufb = new Buffer([2, 3, 4, 5]);
var bufc = new Buffer("Test", "utf-8");
var bufd = new Buffer(10);
var len = bufd.write("Tester");
console.log("Objects written to buffer", len);
console.log(bufd.toString());
console.log(bufd.toJSON());
var bufe = new Buffer(26);
var str = "";
for (let i = 0; i < 26; i++) {
    str += String.fromCharCode(i + 97);
}
bufe.write(str);//write
console.log(bufe.toString('utf-8'));//read
console.log(bufe.toString('ascii', 0, 6));//read
var t = bufe.toJSON(bufe);
// console.log(t);
////////////
var bufa = new Buffer(10);
var bufb = new Buffer([2, 3, 4, 5]);
var bufc = new Buffer("Test", "utf-8");
var bufd = new Buffer(10);
var len = bufd.write("Tester");
console.log("Objects written to buffer", len);
console.log(bufd.toString());
console.log(bufd.toJSON());
var bufe = new Buffer(26);
var str = "";
for (let i = 0; i < 26; i++) {
    str += String.fromCharCode(i + 97);
}
bufe.write(str);//write
console.log(bufe.toString('utf-8'));//read
console.log(bufe.toString('ascii', 0, 6));//read
// var t = bufe.toJSON(bufe);
// console.log(t);
//Concatenating Buffers
var bufp = new Buffer("Test1");
var bufq = new Buffer("Test2");
var bufr = Buffer.concat([bufp, bufq]);
console.log(bufr.toString('utf-8'));
//Copy Buffers
var bufs = new Buffer("SATISH");
var buft = new Buffer(6);
bufs.copy(buft);
console.log(bufs.toString('ascii'));
//Slice buffers
var bufu = new Buffer("My Table");
var bufv = bufu.slice(0, 5);
console.log(bufv.toString('ascii'));
console.log(bufv.length);