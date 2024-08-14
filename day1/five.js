/** 
 * Iterator in JS
*/

// Iterator with string value array.
var arr = ['Einstein', 'Newton', 'Raman', 'Bohr', 'Aryabhatt'];
var iter = arr[Symbol.iterator]();
for (let i = iter.next(); i.done !== true; i = iter.next()) {
    console.log(i.value);
}

// Iterator with floating value array
var arr2 = [11.3333, 43.444444, 54.555555, 98.44444, 67.3333333];
var itera = arr2[Symbol.iterator]();
for (let i = itera.next(); i.done !== true; i = itera.next()) {
    console.log(i.value);
}

// Iterator with the class
class Employee {
    constructor(eid, ename, esal, eage) {
        this.eid = eid;
        this.ename = ename;
        this.esal = esal;
        this.eage = eage;
    }
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['Andrews', 'Ali', 'Hamid', 'Shen', 'Raymond'];
var arr3 = [10000, 1200000, 3100000, 2100, 700];
var arr4 = [21, 33, 17, 45, 54];
var eArr = [];
for (let i = 0; i < arr1.length; i++) {
    var emp = new Employee(arr1[i], arr2[i], arr3[i], arr4[i]);
    eArr.push(emp);
}

var eIter = eArr[Symbol.iterator]();
for (let i = eIter.next(); i.done !== true; i = eIter.next()) {
    console.log(JSON.stringify(i.value));
}


// Iterator with boolean value array.
var arr3 = [true, false, true, false, true, true, false];
var iterc = arr3[Symbol.iterator]();
for (let i = iterc.next(); i.done !== true; i = iterc.next()) {
    console.log(JSON.stringify(i.value));
}


// Iterator with array object.
var aa = [{ "eid": 3, "ename": "Hamid", "esal": 3100000, "eage": 17 },
{ "eid": 2, "ename": "Ali", "esal": 1200000, "eage": 33 },
{ "eid": 1, "ename": "Andrews", "esal": 10000, "eage": 21 },
{ "eid": 4, "ename": "Shen", "esal": 2100, "eage": 45 },
{ "eid": 5, "ename": "Raymond", "esal": 700, "eage": 54 }];

var iterd = aa[Symbol.iterator]();
for (let i = iterd.next(); i.done !== true; i = iterd.next()) {
    console.log(i.value);
}

// alternative way Iterator with array object.
var itere = [{ "eid": 3, "ename": "Hamid", "esal": 3100000, "eage": 17 },
{ "eid": 2, "ename": "Ali", "esal": 1200000, "eage": 33 },
{ "eid": 1, "ename": "Andrews", "esal": 10000, "eage": 21 },
{ "eid": 4, "ename": "Shen", "esal": 2100, "eage": 45 },
{ "eid": 5, "ename": "Raymond", "esal": 700, "eage": 54 }][Symbol.iterator]();
for (let i = itere.next(); i.done !== true; i = itere.next()) {
    console.log(i.value.ename);
}