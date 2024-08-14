const { Books } = require("./Books");

const creaList = function () {
    var arr = [];
    var arr1 = ['Ramayan', 'Mahabharat', 'Kane And Abel', 'Pelican Brief', 'Adventures of tom sawyer'];
    var arr2 = ['Valmiki', 'Vyas', 'J Archer', 'John Grisham', 'Mark Twain'];
    for (let i = 0; i < arr1.length; i++) {
        var book = new Books(arr1[i], arr2[i]);
        arr.push(book);
    }
    return arr;
}

module.exports.creaList = creaList;