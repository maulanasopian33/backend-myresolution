'use strict';

module.exports = (app) =>{
    let controller = require('./controller');

    app.route('/')
        .get(controller.getData);

    app.route('/getdata')
        .get(controller.getData);
    app.route('/getdata/:id')
        .get(controller.getDataById);
    app.route('/insert')
        .post(controller.insertData);
}