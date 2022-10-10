var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', () => {
    console.log("You created a gulp task");
});

gulp.task('html', () => {
    console.log("Changin Html");
});

gulp.task('css', () => {
    console.log("Changin Css");
});

gulp.task('watch', () => {

    watch('./app/index.html', gulp.series('html')),
    watch('./app/assets/styles/**/*.css', gulp.series('css'));

 
});