/** 
 * generator function
 * yield is the return with generator function.
*/

function* MyGen() {
    yield "First";
    yield "Second";
    yield "Third";
    yield "Fourth";
    yield "Fifth";
    yield "Sixth";
}

let myGen = MyGen();
for (let i = myGen.next(); i.done !== true; i = myGen.next()) {
    console.log(i.value);
}


let n = 1;
function* NGen(a) {
    while (n < a) {
        yield "Sqrt(" + n + ")=" + Math.sqrt(n);
        n++;
    }
}
let nGen = NGen(11);
for (let i = nGen.next(); i.done !== true; i = nGen.next()) {
    console.log(i.value);
}
console.clear();
function myfun(...a) {//rest params
    let b = [...a];//Spread operator
    b.forEach(n => console.log(n));
}
myfun(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("*".repeat(10));
myfun(11, 12);
console.log("*".repeat(10));
myfun(31, 43, 54, 65);