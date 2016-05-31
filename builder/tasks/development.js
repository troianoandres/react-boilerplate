'use strict';

// VENDOR LIBS
let gulp = require('gulp');
let runSequence = require('run-sequence');

gulp.task('default', ['clean'], function(cb) {
    global.production = false;

    return runSequence(
        ['sass', 'html',/*'imagemin',*/ 'browserify'/*, 'copyFonts', 'copyIndex', 'copyIcons'*/], 'watch', cb
    );
});