// VENDOR LIBS
const _ = require('lodash');
const path = require('path');
const SessionStorage = require('sessionstorage');

require('libs/api/fixtures-loader');

// APP LIBS
const AJAXUtils = require('libs/api/ajax-utils');

const rootURL = 'http://localhost:2020';

function processData (data) {
    return _.extend({
        userId: SessionStorage.getItem('userId'),
        token: SessionStorage.getItem('token')
    }, data);
}

module.exports = {
    call: function (path, method, data, callback) {
        AJAXUtils[method](rootURL + path, processData(data)).then(callback);
    },
    setConfig: function (userId, token) {
        SessionStorage.setItem('userId', userId);
        SessionStorage.setItem('token', token);
    }
};