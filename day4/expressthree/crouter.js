var express = require('express');
const { lcars } = require('./lcars');
const { Cars } = require('./Cars');
var crouter = express.Router();
var obj = JSON.stringify(lcars());

crouter.get("/", function (req, res) {
    res.send(obj);
});
crouter.post("/ins/:cname/:cbrand", function (req, res) {
    var n = req.params.cname;
    var b = req.params.cbrand;
    var car = new Cars(n, b);
    var aa = lcars().push(car);
    res.send(JSON.stringify(car));
});
crouter.put("/ups/:cname/:cbrand", function (req, res) {
    var n = req.params.cname;
    var b = req.params.cbrand;
    var car = new Cars(n, b);
    var aa = lcars().push(car);
    res.send(JSON.stringify(car));
    console.log("Record Updated In Table");
});
crouter.delete("/del/:cname", function (req, res) {
    var nc = req.params.cname;
    // var car = null;
    // lcars().filter(n => (n.name === nc))
    //     .forEach(n => {
    //         car = n;
    //     });
    var arr = [];
    lcars().filter(n => (n.name !== nc))
        .forEach(n => {
            arr.push(n);
        });
    res.send(JSON.stringify(arr));
    console.log("Record deleted from table");
});
module.exports = crouter;
