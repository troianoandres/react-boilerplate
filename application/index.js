// LIBS
const API = require('libs/api/api');
const i18n = require('libs/i18n/i18n');

// APPLICATION ROUTER
const router = require('application/router');

API.call('/user/login', 'post', {user: '', password: ''}, function (response) {
    console.log(response);
});

console.log(i18n('LOGIN'));

router.run(document.getElementById('mount-point'));