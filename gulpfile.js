var gulp = require('gulp');
var scss = require("gulp-sass")
var useref = require('gulp-useref');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function () {
  return gulp.src('src/*.js')
    .pipe(concat('js/main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('sass', function () {
  return gulp.src('src/*.scss')
    .pipe(scss())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/style'))
})

gulp.task('useref', function () {
  gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulp.dest('dist'))
})



gulp.task('mainTask', ['scripts', 'sass', 'useref'], function () {
  return console.log('---------------------done--------------------')
});


