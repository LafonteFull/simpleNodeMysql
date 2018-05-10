'use strict';
//export by default
module.exports = function (app) {
    // grab 
    var name = require('../controllers/name');
    var siteRoot = require('../routes/root');

    // Site Index
    app.use('/', siteRoot);

    // Strains
    app.route('/name')
        .get(name.getAllItems);
}