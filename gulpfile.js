var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
browserSync = require('browser-sync').create(),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
postcss = require('gulp-postcss'),
watch = require('gulp-watch'),
mixins = require('postcss-mixins');


gulp.task('Reload', () => {
    
});

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

gulp.task('watch', () => {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', gulp.series(() => {
        browserSync.reload();
    })),
    watch('./app/assets/styles/**/*.css', gulp.series('sass'));
});

