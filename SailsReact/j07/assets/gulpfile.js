"use strict";

// GULP DEPENDENCIES
var connect = require('gulp-connect');
var gulp = require('gulp');
var gutil = require('gulp-util');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglifycss = require('gulp-cssnano');
var notifier = require('node-notifier');
var autoprefixer = require('gulp-autoprefixer');
var imageop = require('gulp-image-optimization');

//VARIABLES
var port = 8001;
var rootFolder = './';
var stylesFolder = './styles';
var destFolder = './';

// LIVERELOAD SERVER
    gulp.task('serve', function () {
        connect.server({
            root: [`${rootFolder}`],
            port: port,
            livereload: true
        });
        notifier.notify({
          'title': 'Livereload server started',
          'message': `http://localhost:${port}`
        });
    });

// SASS
    gulp.task('sass', function () {
      gulp.src(`${rootFolder}/**/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(uglifycss() )
        .pipe(gulp.dest(`${stylesFolder}`))
        .pipe(connect.reload());
        notifier.notify('SASS Compiled');
    });

//IMAGES
    gulp.task('images', function(cb) {
        gulp.src(`${destFolder}/images/*.+(png|jpg|gif|jpeg)`).pipe(imageop({
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        })).pipe(gulp.dest(`${destFolder}/images`)).on('end', cb).on('error', cb);
        notifier.notify('Images compressed');
    });

// WATCH
    gulp.task('watch', function () {
        gulp.watch(`${rootFolder}/**/*.scss`, ['sass']);
        notifier.notify('Gulp Watching...');
    });

// DEFAULT
    gulp.task('default', ['watch']);