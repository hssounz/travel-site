var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
postcss = require('gulp-postcss'),
watch = require('gulp-watch');

gulp.task('default', () => {
    console.log("You created a gulp task");
});

gulp.task('html', () => {
    console.log("Changin Html");
});

gulp.task('css', () => {
   return gulp.src('./app/assets/styles/styles.scss')
            .pipe(postcss([nested, cssvars, autoprefixer]))
            .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {

    watch('./app/index.html', gulp.series('html')),
    watch('./app/assets/styles/**/*.scss', gulp.series('css'));

 
});