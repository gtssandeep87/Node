//normal function
function fa() {
    console.log("Iam a function");
}
fa();


// normal function with parameter
function fb(a) {
    console.log(Math.log(a));
}
fb(2);


//Anonymous Function
const fc = function () {
    console.log("Iam a function");
}
fc();


//Arrow function
const fd = () => { console.log("Iam a function"); }
fd();


//IIFE=Immediately Instantiable Function Expression
(
    function () {
        console.log("Hai there Iam an IIFE");
    }
)();


//IIFE=Immediately Instantiable Function Expression with parameter
(
    function (a) {
        console.log(Math.sqrt(a));
    }
)(10);


//Function Constructor
var ff = new Function('a', 'b', 'c', 'return a+b+c');
console.log(ff(1, 2, 3));



//Constructor Function
function Person(name, email) {
    this.name = name;
    this.email = email;
}
var pera = new Person('sunil', 'sunil@yahoo.com');
var perb = new Person('james', 'james@gmail.com');
console.log(JSON.stringify(pera));
console.log(JSON.stringify(perb));  


// Defining class with constructor
class Cars {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
var car = new Cars('Octavio', 'Skoda');
console.log(JSON.stringify(car));


// Ineritance
class A {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class B extends A {
    constructor(id, name, email) {
        super(id, name);
        this.email = email;
    }
}
const obj = new B(21, 'Sunita', 'sunita@yahoo.com');
console.log(JSON.stringify(obj));


// class with get and set function
class C {
    _id;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}
var cc = new C();
cc.id = 10;
cc.name = 'Joyse James';
cc.email = 'joyse@gmail.com';
console.log(JSON.stringify(cc));


console.clear();
/**
 * Array concept
 */

var arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arr.push(10000);//add it to the end
arr.unshift(1090);//add it to the beginning
arr.pop();//remove from the end of array
arr.shift();//remove from the beginning of the array
// arr.push('Hello');
console.log(arr);

// returning indexes
for (const key in arr) {
    console.log(arr[key]);  // console.log(key); 
}

// returning actual element
for (const i of arr) {
    console.log(i); 
}


function prn(a) {
    console.log(a);
}
// arr.forEach(prn);
// arr.forEach(n => console.log(n)); // loop using consumer function
arr.map(n => console.log(n));

// Multi-dimension array
let arr2 = [['Albert', 'Einstein'], ['Isaac', 'Newton'], ['Chandrasekhar', 'Raman']];
// for (const a of arr2) {
//     for (const b of a) {
//         console.log(b);
//     }
// }
 arr2.forEach(n => n.forEach(a => console.log(a))); // alternative way to iterate using forEach





