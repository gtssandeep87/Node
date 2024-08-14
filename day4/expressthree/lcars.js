const { Cars } = require("./Cars");

const lcars = () => {
    var cArr = [];
    var arr1 = ['Octavio', 'Punto', 'Beetel', 'Lilac', 'Lincoln'];
    var arr2 = ['Skoda', 'Fiat', 'VW', 'Cadillac', 'Continental'];
    for (let i = 0; i < arr1.length; i++) {
        var car = new Cars(arr1[i], arr2[i]);
        cArr.push(car);
    }
    return cArr;
}
module.exports.lcars = lcars;