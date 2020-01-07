'use strict';

var response = require('./res');
var koneksi = require('./config');

exports.index = function (req, res) {
    response.ok("Selamat datang di restfull api dengan node js dan mysql", res);
};
