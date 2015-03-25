'use strict';

//<editor-fold desc="REQUIRES">
require('./util.js');
var gulp = require('gulp');
var args = require('yargs').argv;
var print = require('gulp-print');
var rename = require('gulp-rename');
var injectString = require('gulp-inject-string');
var inject = require('gulp-inject');
var gulpif = require('gulp-if');
var gulpIgnore = require('gulp-ignore');
var gulpFilter = require('gulp-filter');
var stripLine = require('gulp-strip-line');
var replace = require('gulp-replace');
var source = require('vinyl-source-stream')
var streamify = require('gulp-streamify')
var concat = require("gulp-concat");
var order = require("gulp-order");
var merge = require('merge-stream');
var es = require('event-stream');
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

gulp.task('gsa', function () {

    var initialFile = 'css-animations.styl';
    var file = animation + initialFile;

    var initialInjection = 'css-animations.tpl';
    var injection = templates + initialInjection;

    var fileStream = gulp.src(file);

    var fs = require('fs')
    fs.readFile(injection, 'utf8', function (err, injStr) {
        injStr = injStr.replace(/svv/g, cname);

        fileStream
            .pipe(gulpif(rm != true, injectString.append(injStr), replace(injStr, '')))
            .pipe(concat(initialFile))
            .pipe(gulp.dest(animation))
    });
});
