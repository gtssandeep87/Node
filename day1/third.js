/**
 * Map and set in JS
 */

var seta = new Set(); // Set will return the unique value object 
var arr = [10, 9, 9, 10, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 66, 6, 6];
for (const i of arr) {
    seta.add(i);
}
console.log(seta);

// set with the string array
var arra = ['atish', 'Atish'.toLowerCase(), 'atish', 'atish', 'brian', 'brian', 'brian', 'camry', 'david', 'david', 'david'];
var setb = new Set(arra);
console.log(setb);


var map = new Map();
var arrb = [1, 2, 3, 4, 5];
var arrc = ['Physics', 'Astro Physics', 'Geo Physics', 'Nuclear Physics', 'Nano Physics'];
for (let i = 0; i < arrb.length; i++) {
    map.set(arrb[i], arrc[i]);
}

// console.log(map);
// map.forEach((a, b) => console.log(b + " " + a));


let mykeys = Array.from(map.keys());
// mykeys.forEach(n => console.log(n + " " + map.get(n)));


let vals = Array.from(map.entries());
// vals.forEach(a => console.log(a));
// vals.forEach(a => console.log(a[0] + " " + a[1]));
// vals.map(a => console.log(a[0] + " " + a[1]));


var valsa = Array.from(map.values());
valsa.forEach(a => console.log(a));
