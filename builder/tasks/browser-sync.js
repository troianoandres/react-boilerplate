let browserSync = require('browser-sync');
let gulp = require('gulp');
let config = require('builder/config');
let path = require('path');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: path.join(config.root, config.dist)
        },
        port: config.port,
        ui: {
            port: '3000'
        }
    });
});