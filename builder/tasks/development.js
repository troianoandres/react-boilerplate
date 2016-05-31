'use strict';

// VENDOR LIBS
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', ['clean'], function(cb) {
    global.production = false;

    return runSequence(['sass', 'html', 'images', 'js-build', 'fonts', /*'copyIcons'*/], 'watch', cb);
});