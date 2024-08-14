// var express = require('express');
// var router = express.Router();

// var obj = { id: 101, name: 'sunil', email: 'sunil@gmail.com' };
// router.get("/", function (req, res) {
//     var aa = JSON.stringify(obj);
//     res.send(aa);
// });

// module.exports = router;


var express = require('express');
var router = express.Router();

var obj = { id: 101, name: 'sunil', email: 'sunil@gmail.com' };
router.get("/", function (req, res) {
    var aa = JSON.stringify(obj);
    res.send(aa);
});
router.post("/p", function (req, res) {
    res.send("This is post request");
});
router.put("/pu", function (req, res) {
    res.send("This is put request");
});
router.delete("/d", function (req, res) {
    res.send("This is delete request");
});

module.exports = router;