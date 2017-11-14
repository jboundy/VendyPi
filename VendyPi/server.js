'use strict';
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'src/views/index.html'));
    });

app.listen(port);

//var stripeVM = {
//    description: ko.observerable("description"),
//    amount: ko.obserable("000"),
//}

//ko.applyBindings(stripeVM);
