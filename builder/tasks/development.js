// VENDOR LIBS
let gulp = require('gulp');
let runSequence = require('run-sequence');
let emptyFunction = require('helpers/empty-function')

gulp.task('default', ['clean'], function(cb = emptyFunction) {
    global.production = false;

    return runSequence(['sass', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons'], 'watch', cb);
});