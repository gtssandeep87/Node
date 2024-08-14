//Currying
function calVol(l) {
    return function (b) {
        return function (h) {
            return l * b * h;
        }
    }
}

/*
const calVol = (l) => {
    return (b) => {
        return (h) => {
            return l * b * h;
        }
    }
}
var cc=calVol(1)(2)(3);
console.log(cc);
*/

var c = calVol(1);
for (let o = 0; o < 10; o++) {
    console.log("****" + o);
}
var d = c(2);
for (let o = 0; o < 10; o++) {
    console.log("^^^^^" + o);
}
var e = d(3);
console.log(e);

