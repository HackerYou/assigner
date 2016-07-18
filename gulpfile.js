var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('gulp-6to5');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task('scripts', function() {
    return gulp.src('js/scripts.js')
        .pipe(sourcemaps.init())
        .pipe(to5())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  gulp.src('./css/style.stylus')
    .pipe(stylus())
    .pipe(gulp.dest('dist'));
});



gulp.task('default',['scripts','styles']);

gulp.task('watch',function(){

  gulp.watch('js/scripts.js', ['scripts']);
  gulp.watch('css/style.stylus', ['styles']);

});
