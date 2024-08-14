const { Cars } = require("./Cars");

function retList() {
    var myArr = [];
    var arr0 = [1010, 2010, 3010, 4010, 5010];
    var arr1 = ['Octavios', 'Nexusa', 'Puntos', 'EClasses', 'Lilacs'];
    var arr2 = ['Skodas', 'Lexuses', 'Fiats', 'Mercedeses', 'Cadillacs'];
    for (let i = 0; i < arr1.length; i++) {
        var car = new Cars(arr0[i], arr1[i], arr2[i]);
        myArr.push(car);
    }
    return myArr;
}

module.exports.retList = retList;