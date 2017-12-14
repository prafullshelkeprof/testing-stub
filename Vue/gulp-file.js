let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    copy = require('gulp-copy');


gulp.task('buildApp', () => {
    pump([
        gulp.src('./index.html'),
        copy('dist/')
    ]);
})
gulp.task('uglifyJs', () => {
    pump([
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest('dist')
    ]);
});
gulp.task('default', ['buildApp', 'uglifyJs']);