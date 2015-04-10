'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell')
var please = require('gulp-pleeease');
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');

gulp.task('add', shell.task([
    'git add .',
]))

gulp.task('please', function () {
    gulp.src(['./app/styles/main.css','./app/assets/app.css'])
        .pipe(plumber())
        .pipe(please())
        .pipe(rename({
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(gulp.dest('./app/styles/'));
});

gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.styl', ['stylus']);
    gulp.watch('app/scripts/**/*.styl', ['stylus']);
    gulp.watch('app/**/*.jade', ['jade']);
    gulp.watch('app/styles/main.css', ['please']);

    //gulp.watch('app/images/**/*', ['images']);
    //gulp.watch('app/**/*', ['add']);

    gulp.watch('bower.json', ['wiredep']);
});
