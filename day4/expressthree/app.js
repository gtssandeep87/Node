// npm install express-generator -g

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router');
var crouter = require('./crouter');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/data', router);
app.use('/cdata', crouter);
app.listen(5000, () => {
    console.log("Service is Up!");
});


// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var router = require('./router');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/data', router);
// app.listen(5000, () => {
//     console.log("Service is Up!");
// });