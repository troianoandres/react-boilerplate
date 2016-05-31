const _ = require('lodash');
const $ = require('jquery');
const mockjax = require('jquery-mockjax')($, window);

let fixtures = (function () {
    let fixturesData = [];

    return {
        add(fixtures) {
            fixturesData = fixturesData.concat(fixtures);
        },
        getAll() {
            return fixturesData;
        }
    };
})();

// FIXTURES
fixtures.add(require('services/user-service'));

//TODO: move this variable to a common place across all application
const rootURL = 'http://localhost:2020/';

_.each(fixtures.getAll(), function (fixture) {
    mockjax({
        contentType: 'application/json',
        url: rootURL + fixture.path,
        responseTime: fixture.time || 500,
        response: function (settings) {
            this.responseText = fixture.response(settings.data);
        }
    });
});
