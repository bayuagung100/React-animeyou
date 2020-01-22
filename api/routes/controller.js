'use strict';

var response = require('./res');
var koneksi = require('./config');

var session = require('express-session');

exports.index = function (req, res) {
    response.ok("Selamat datang di restfull api dengan node js dan mysql", res);
};
exports.index = function (req, res) {
    response.ok("tes", res);
};


exports.auth = function(req, res) {
	var username = req.body.username;
    var password = req.body.password;

	if (username && password) {
		koneksi.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (error) {
                console.log(error);
            } else if (results.length > 0) {
                req.session.login = true;
                req.session.username = username;
                req.session.password = password;
                response.auth(req.session, results, res);
            } else {
                response.ok('Incorrect Username and Password!');
            }			
		});
	} else {
		response.ok('Please enter Username and Password!');
	}
};

