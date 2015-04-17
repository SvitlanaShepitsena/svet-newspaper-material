'use strict';
var gulp = require('gulp');
var p = require('gulp-load-plugins')();

var browserSync = require("browser-sync");
var reload = browserSync.reload;

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

///////////////////////////// JADE ////////////////////////////////////////////////
gulp.task("jade", function () {
    return gulp.src(["./app/scripts/**/*.jade"])
        .pipe(p.plumber({errorHandler: onError}))
        .pipe(p.jade())
        .pipe(gulp.dest("./app/scripts/"))
});

gulp.task('jade:watch', ['jade'], browserSync.reload);


///////////////////////////// Stylus/Css ////////////////////////////////////////////////

gulp.task("stylus:scripts", function () {
    return gulp.src(["./app/scripts/**/*.styl",])
        .pipe(p.plumber({errorHandler: onError}))
        .pipe(p.stylus({use: nib()}))
        .pipe(gulp.dest("./app/scripts/"))
        .pipe(reload({stream: true}));

    ;
});

gulp.task("stylus:main", ['stylus:scripts'], function () {
    return gulp.src(["./app/styles/**/*.styl",])
        .pipe(p.plumber({errorHandler: onError}))
        .pipe(p.stylus({use: nib()}))
        .pipe(p.filter('*.css'))
        .pipe(p.pleeease({
            minifier: false,
            "browsers": ["ie 10"]
        }))
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
        notify: false
    });

    gulp.watch(["./app/scripts/**/*.styl", "./app/styles/**/*.styl"], ['stylus:main']);

    gulp.watch(['./app/scripts/**/*.jade'], ['jade:watch']);

    gulp.watch("app/**/*.js", ['js-watch']);

    gulp.watch("app/*.html").on('change', reload);


});


gulp.task('default', ['serve']);


///**********************
// ANGULAR
// ***********************/
//require('./gulp/ng/value.js');
//require('./gulp/ng/css-transitions.js');
//require('./gulp/ng/css-animations.js');
//require('./gulp/ng/js-animations.js');
