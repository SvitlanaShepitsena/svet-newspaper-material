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

var templates = 'templates/';
var styles = 'app/styles/';
var animation = styles + 'animation/';

var argv = require('yargs')
    .default('cname', 'svv')
    .argv;

var rm = argv.rm;
var cname = argv.cname;

var initialInjection = 'js-animations.js';
var injection = templates + initialInjection;
var injectLine;
var fs = require('fs')

gulp.task('gja', function () {
    fs.readFile(injection, 'utf8', function (err, injStr) {
        injectLine = injStr.replace(/svv/g, cname);
        return gulp.src(scripts + 'app.js')
            .pipe(gulpif(rm != true, inject.append(injectLine), replace(injectLine, '')))
            .pipe(gulp.dest(scripts));
    });

});


function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
