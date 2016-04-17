'use strict';

// VENDOR LIBS
let gulp = require('gulp');
let gulpif = require('gulp-if');
let path = require('path');
let source = require('vinyl-source-stream');
let sourcemaps = require('gulp-sourcemaps');
let watchify = require('watchify');
let browserify = require('browserify');
let babelify = require('babelify');
let uglify = require('gulp-uglify');
let browserSync = require('browser-sync');
let debowerify = require('debowerify');
let errorHandler = require('builder/helpers/error-handler');
const config = require('builder/config');

let build = function (file) {
    let bundler = browserify({
        entries: [
            path.join(config.src, config.scripts.src)
        ],
        debug: !(global.production),
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    let bundle = function () {
        let stream = bundler.bundle();

        console.log('re bund');

        return stream.on('error', errorHandler)
            .pipe(source(file))
            .pipe(gulpif(global.production, uglify()))
            .pipe(gulpif(!global.production, sourcemaps.write('./')))
            .pipe(gulp.dest(config.scripts.dest))
            .pipe(gulpif(config.sync, browserSync.reload({stream: true})));
    };


    if (!global.production) {
        bundler = watchify(bundler);
        bundler.on('update', bundle);
    }

    bundler.transform(babelify);
    bundler.transform(debowerify);

    return bundle();
};

gulp.task('browserify', function() {
    return build('app.js');
});