'use strict';

module.exports = function (app) {
    var url = require('./controller');

    //url homenya
    app.route('/').get(url.index);

};