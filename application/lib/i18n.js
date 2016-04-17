'use strict';

// VENDOR LIBS
const MessageFormat = require('messageformat');

// APP DATA
const i18nData = require('application/data/i18n-data');

//TODO: move this variable to a common place across all application
const language = 'en';

const mf = new MessageFormat(language);

const i18n = function (key, params) {
    let i18nValue = i18nData[language][key];
    let message = mf.compile(i18nValue);

    return message(params || null);
};

module.exports = i18n;
