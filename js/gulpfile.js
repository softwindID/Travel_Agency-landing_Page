const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');


gulp.task('less', function () {
    return gulp.src('css/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css/style.css'));
});


gulp.task('watch', function () {
    gulp.watch('./css/style.less', gulp.series('less'));
});

exports.default = gulp.series('less', 'watch');