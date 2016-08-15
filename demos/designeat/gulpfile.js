
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
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

gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('view/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./'));
});


gulp.task('imagemin', function () {
    gulp.src('images/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('images/'));
});