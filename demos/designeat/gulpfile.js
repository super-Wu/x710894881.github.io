
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');
 

gulp.task('jsmin',function(){
    gulp.src(['js/unit.js','js/index.js'])
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

gulp.task('cssmin',function(){
    gulp.src('css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('css/'));
});

gulp.task('imagemin', function () {
    gulp.src('images/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('images/'));
});