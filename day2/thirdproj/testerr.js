
//npm i string_decoder
const { StringDecoder } = require('string_decoder');
const q = require('querystring');
const decoder = new StringDecoder('utf-8');
const buf = new Buffer('This is my buffer');
console.log(decoder.write(buf));
const bufa = new Buffer('736174697368', 'hex');
console.log(decoder.write(bufa));
const obj = q.parse("name=satish&com=linux&comp=Lenova");
console.log(obj.name + " " + obj.com + " " + obj.comp);