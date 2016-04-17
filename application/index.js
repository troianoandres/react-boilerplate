'use strict';

require('application/lib/fixtures-loader');

/** TEST API CALL **/
const API = require('application/lib/api');

API.call('/user/login', 'post', { user: '', password: '' }, function (response) {
    console.log(response);
});
