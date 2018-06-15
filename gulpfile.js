const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-webserver');

gulp.task('sass', function(){
    gulp.src('./src/sass/style.scss')
    .pipe(sass({
        outputStyle: "compact"
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('server', function(){
    gulp.src('./dist')
    .pipe(server({
        host: 'localhost',
        port: '5555',
        liveReload: true
    }));
});

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss',['sass']);
});

gulp.task('default', ['sass','server','watch']);