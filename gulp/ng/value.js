'use strict';

//<editor-fold desc="REQUIRES">
require('./util.js');
var gulp = require('gulp');
var args = require('yargs').argv;
var print = require('gulp-print');
var rename = require('gulp-rename');
var inject = require('gulp-inject-string');
var gulpif = require('gulp-if');
var gulpIgnore = require('gulp-ignore');
var gulpFilter = require('gulp-filter');
var stripLine = require('gulp-strip-line');
var replace = require('gulp-replace');
//</editor-fold>

var scripts = 'app/scripts/';
var allJsFiles = scripts + '**/*.js';

var argv = require('yargs')
    .default('name', 'value')
    .default('value', 'value')
    .argv;

var injectLine = "app.value('" + argv.name + "', '" + argv.value + "');\r\n";

var rm = argv.rm;

gulp.task('fileInject', function () {
    var fileInc = '**/' + argv.file + '.js';
    var filter = gulpFilter(fileInc);

    var injString = ', ' + argv.name;
    return gulp.src(allJsFiles)
        .pipe(filter)
        .pipe(gulpif(rm != true, inject.after('$scope', injString), replace(injString, '')))
        .pipe(gulp.dest(scripts))

    //.pipe(gulp.dest(scripts));

});
gulp.task('appInject', function () {
    return gulp.src(scripts + 'app.js')
        .pipe(gulpif(rm != true, inject.append(injectLine), replace(injectLine, '')))
        .pipe(gulp.dest(scripts));

});


gulp.task('value', ['appInject', 'fileInject']);

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
