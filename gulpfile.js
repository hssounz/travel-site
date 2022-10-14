var gulp = require('gulp'),
autoprefixer = require('autoprefixer'),
browserSync = require('browser-sync').create(),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
postcss = require('gulp-postcss'),
watch = require('gulp-watch'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
webpack = require('webpack'),
mixins = require('postcss-mixins');

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

//SCRIPTS TO BUNDLE
gulp.task('createBundle', (callback) => {
    webpack(require('./webpack.config'), (err, stats) => {
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback(); browserSync.reload(); 
    } 
)});

//GENERATING SPRITE.CSS FILE FROM SVGS
let config = {
    mode: {
        css: {
            render: {
                css: {
                    template: './templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('createSprite', () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgSprite(config))
                .pipe(gulp.dest('./app/temp/sprite/'));
})

gulp.task('copySpriteCss', () => {
    return gulp.src('./app/temp/sprite/css/*.css')
            .pipe(rename('_sprite.css'))
                .pipe(gulp.dest('./app/assets/styles/modules'));
})

