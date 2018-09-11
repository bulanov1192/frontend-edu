var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
   return gulp.src('app/scss/main.sass')
       .pipe(sass())
       .pipe(gulp.dest('dist/css'))
});
