'use strict';

module.exports = function (app) {
    var url = require('./controller');

    //url homenya
    app.route('/').get(url.index);
    app.route('/test').get(url.index);
    app.route('/auth').post(url.auth);
};