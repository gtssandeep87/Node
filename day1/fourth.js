
// create a new employee class
class Employee {
    constructor(eid, ename, esal, eage) {
        this.eid = eid;
        this.ename = ename;
        this.esal = esal;
        this.eage = eage;
    }
}

// defining values in array 
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['Andrews', 'Ali', 'Hamid', 'Shen', 'Raymond'];
var arr3 = [10000, 1200000, 3100000, 2100, 700];
var arr4 = [21, 33, 17, 45, 54];

// defining new blank array eArr
var eArr = [];

// assigning values in constrctor function and push into blank array
for (let i = 0; i < arr1.length; i++) {
    var emp = new Employee(arr1[i], arr2[i], arr3[i], arr4[i]);
    eArr.push(emp);
}

//Sorting by age in asc
//select * from emp order by age 
// eArr.sort((a, b) => a.eage - b.eage).forEach(n => console.log(JSON.stringify(n)));


//Sorting by id desc
//select * from emp order by id desc
// eArr.sort((a, b) => b.eid - a.eid).forEach(n => console.log(JSON.stringify(n)));


//Sorting by sal asc
//select * from emp order by sal
// eArr.sort((a, b) => a.esal - b.esal).forEach(n => console.log(JSON.stringify(n)));


//Sorting sal desc
//select * from emp order by sal desc
eArr.sort((a, b) => b.esal - a.esal).map(n => console.log(JSON.stringify(n)));


//Printing annual sal of each emp
//select (esal*12) as ansal from emp
eArr.map(n => n.ename + " " + n.esal * 12).forEach(a => console.log(a));


//Avg age of all emp
//select avg(a.esal) as a from emp
var sums = 0.0;
eArr.map(n => n.eage).forEach(n => sums += n);
console.log((sums / 5));


// for (const k in eArr) {
//     console.log(JSON.stringify(eArr[k]));
// }
// for (const i of eArr) {
//     console.log(JSON.stringify(i));
// }
eArr.map(n => console.log(JSON.stringify(n)));