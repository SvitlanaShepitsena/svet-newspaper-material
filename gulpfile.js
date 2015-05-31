'use strict';
var gulp = require('gulp');
var p = require('gulp-load-plugins')();
var requireDir = require('require-dir');
requireDir('./gulp/ng');
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var cmq = require('gulp-combine-media-queries');
var nib = require('nib');

///////////////////////////// Error Handling ////////////////////////////////////////////////
var onError = function (err) {
    p.notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
    })(err);
    this.emit('end');
};
    var scripts = "app/scripts/";
///////////////////////////// JADE ////////////////////////////////////////////////

gulp.task("jade", function () {
    return gulp.src(["app/scripts/**/*.jade"])
        .pipe(p.newer({dest: scripts, ext: '.html'}))
        .pipe(p.plumber({errorHandler: onError}))
        .pipe(p.jade())
        .pipe(gulp.dest(scripts))
});
gulp.task('jade:watch', ['jade'], browserSync.reload);

///////////////////////////// Stylus/Css ////////////////////////////////////////////////
gulp.task("stylus:scripts", function () {
    return gulp.src(["app/scripts/**/*.styl",])
        .pipe(p.newer({dest: scripts, ext: '.css'}))
        .pipe(p.plumber({errorHandler: onError}))
        .pipe(p.stylus({use: [nib()]}))
        .pipe(gulp.dest("./app/scripts/"))
        .pipe(reload({stream: true}));
    ;
});
gulp.task("stylus:main", ['stylus:scripts'], function () {
    return gulp.src(["app/styles/**/*.styl",])
        .pipe(p.newer({dest: scripts, ext: '.css'}))
        .pipe(p.plumber({errorHandler: onError}))
        .pipe(p.stylus({use: nib()}))
        .pipe(p.filter('*.css'))
        //.pipe(p.pleeease({
        //    minifier: false,
        //    "browsers": ["ie 10"]
        //}))
        //.pipe(cmq({
        //    log: true
        //}))
        .pipe(gulp.dest("./app/styles/"))
        .pipe(reload({stream: true}));
});

///////////////////////////// JS  ////////////////////////////////////////////////
gulp.task('js-watch', browserSync.reload);
///////////////////////////// SERVER  ////////////////////////////////////////////////
gulp.task('serve', ['stylus:main', 'jade'], function () {
    browserSync({
        server: "./app",
        logLevel: "silent",
        notify: false,
        scrollProportionally: false,
        ghostMode: false
    });
    gulp.watch(["app/scripts/**/*.styl", "app/styles/**/*.styl"], ['stylus:main']);
    gulp.watch(['app/scripts/**/*.jade'], ['jade:watch']);
    gulp.watch("app/scripts/**/*.js", ['js-watch']);
    gulp.watch("app/index.html").on('change', reload);

    gulp.watch("app/bower_components/textAngular/dist/*.js").on('change', reload);
});
gulp.task('default', ['serve']);
///**********************
// ANGULAR
// ***********************/
//require('./gulp/ng/value.js');
//require('./gulp/ng/css-transitions.js');
//require('./gulp/ng/css-animations.js');
//require('./gulp/ng/js-animations.js');
