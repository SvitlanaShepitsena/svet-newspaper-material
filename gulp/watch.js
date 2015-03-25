'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell')
gulp.task('add', shell.task([
    'git add .',
]))

gulp.task('watch', ['wiredep'], function () {
    gulp.watch('app/styles/**/*.styl', ['stylus']);
    gulp.watch('app/scripts/**/*.styl', ['stylus']);
    gulp.watch('app/**/*.jade', ['jade']);
    //gulp.watch('app/images/**/*', ['images']);
    //gulp.watch('app/**/*', ['add']);

    gulp.watch('bower.json', ['wiredep']);
});
