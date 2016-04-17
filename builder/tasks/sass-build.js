'use strict';

// VENDOR LIBS
let path = require('path');
let gulp = require('gulp');
let sass = require('gulp-sass');
let gulpif = require('gulp-if');
let browserSync = require('browser-sync');
let concat = require('gulp-concat');
let errorHandler = require('builder/helpers/error-handler');
const config = require('builder/config');
const cssmin = require('gulp-minify-css');

gulp.task('sass', function() {

    return gulp.src(config.styles.src)
        .pipe(sass({
            sourceComments: (global.production),
            sourceMap: (global.production) ? false : 'sass',
            outputStyle: 'nested'
        }))
        .pipe(concat('style.css'))
        .on('error', errorHandler)
        .pipe(gulpif(global.production, cssmin()))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(gulpif(config.sync, browserSync.reload({stream: true})));
});