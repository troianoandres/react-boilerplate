'use strict';

// VENDOR LIBS
let path = require('path');
let browserSync = require('browser-sync');
let gulp = require('gulp');
let config = require('builder/config');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: config.dist
        },
        port: config.port,
        ui: {
            port: '3000'
        }
    });
});