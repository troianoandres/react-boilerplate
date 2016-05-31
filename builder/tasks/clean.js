'use strict';

// VENDOR LIBS
let path = require('path');
let gulp = require('gulp');
let del = require('del');
let config = require('builder/config');

gulp.task('clean', function() {
    return del([config.dist]);
});