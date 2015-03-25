'use strict';
var gulp = require('gulp');
require('require-dir')('./gulp');
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});



/**********************
 ANGULAR
 ***********************/
require('./gulp/ng/value.js');
require('./gulp/ng/css-transitions.js');
require('./gulp/ng/css-animations.js');
require('./gulp/ng/js-animations.js');
