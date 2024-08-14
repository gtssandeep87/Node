// 7 types of data types in JS
var a = 10;
var b = 'Sandeep Sharma';
var c = true;
var d = null;
var e;
var f = {id:1, name:'sandeep'}
var g = Symbol('1');

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

console.log(Symbol('a') === Symbol('a')); // Compiler generate a value againest a