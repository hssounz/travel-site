var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
postcss = require('gulp-postcss'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync').create();






//RENDRING SASS TO CSS
gulp.task('sass', () => {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
        .on('error', (errorInfo) => {
            console.log(errorInfo.toString());
            this.imit('end');
        })
        .pipe(gulp.dest("./app/temp/styles"))
        .pipe(browserSync.stream());
});