var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
browserSync = require('browser-sync').create(),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
postcss = require('gulp-postcss'),
watch = require('gulp-watch'),
svgSprite = require('gulp-svg-sprite'),
mixins = require('postcss-mixins');

// RENDRING SASS INTO CSS
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

let config = {
    mode: {
        css: {
            
        }
    }
}

gulp.task('createSprite', () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgSprite(config))
            .pipe(gulp.dest('./app/temp/sprite/'));

})

//GULP WATCH - RELOAD AND STREAMING
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

