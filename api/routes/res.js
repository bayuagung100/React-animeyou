'use strict';

exports.ok = function (values, res) {

    var data = {
        'status': 200,
        'values': values
    };
    var api = {
        data: data
    }
    res.json(api);
    res.end();
};

exports.auth = function (session, values, res) {
    var data = {
        'status': 200,
        'sessions': session,
        'values': values
    };
    var api = {
        data: data
    }
    // res.writeHead(200, { 'Access-Control-Allow-Origin': '*', });
    res.json(api);
    res.end();
};