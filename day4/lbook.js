const { Books } = require("./Books");

const retList = function () {
    var arr1 = ['Ramayan', 'Mahabharat', 'Sakuntalam', 'War And Peace', 'Quiet Flows Of Don'];
    var arr2 = ['Valmiki', 'Vyas', 'Kalidasa', 'Tolstoy', 'Sholkov Mikhail'];
    var aBooks = [];
    for (let i = 0; i < arr1.length; i++) {
        let book = new Books(arr1[i], arr2[i]);
        aBooks.push(book);
    }
    return aBooks;
}

module.exports.retList = retList;