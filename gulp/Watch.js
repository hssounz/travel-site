var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch');



//GULP WATCH - RELOAD AND STREAMING
gulp.task('watch', () => {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/assets/scripts/**/*.js', gulp.series('createBundle'));

    watch('./app/index.html', gulp.series(() => {
        browserSync.reload();
    })),
    watch('./app/assets/styles/**/*.css', gulp.series('sass'));
});