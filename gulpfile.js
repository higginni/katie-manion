var newStyleDestination = './assets/css/';
var gulp = require('gulp');
var browserSync = ('browser-sync');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss').pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError)).pipe(gulp.dest(newStyleDestination)).pipe(notify({
        message: 'TASK: "styles" Completed! 💯',
        onLast: true
    }))
});
gulp.task('default', ['sass'], function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});