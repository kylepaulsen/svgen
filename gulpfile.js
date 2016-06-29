'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var MAIN_PATH = './src/main.js';
var BUILD_PATH = './build.js';
var WATCH_PATH = './src/**/*.js';

gulp.task('dev', function() {
    gulp.src(MAIN_PATH)
        .pipe(browserify({
            debug: true
        }))
        .pipe(rename(BUILD_PATH))
        .pipe(gulp.dest('./'));
});

gulp.task('prod', function() {
    gulp.src(MAIN_PATH)
        .pipe(browserify({
            debug: false
        }))
        .pipe(uglify({
            mangle: true
        }))
        .pipe(rename(BUILD_PATH))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(WATCH_PATH, ['dev']);
});

gulp.task('default', ['dev']);
