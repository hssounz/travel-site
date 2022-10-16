var gulp = require('gulp'),
del = require('del'),
imagemin = require('gulp-imagemin'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
htmlmin = require('gulp-htmlmin'),
cssnano = require('gulp-cssnano'),
browserSync = require('browser-sync').create(),
uglify = require('gulp-uglify');


//Previewing our dist app
gulp.task('preview', () => {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }
    });

})

//DELETING DIST FOLDER FOR REBUILD
gulp.task('deleteDistFolder', async  () => {
    del('./dist/**');
})

//COPY GENERAL FILES
gulp.task('copy', () => {
    var paths = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets',
        '!./app/assets/**/*',
        '!./app/temp',
        '!./app/temp/**',
    ]
    return gulp.src(paths)
                .pipe(gulp.dest('./dist'))
})

// OPTIMIZING IMAGES FOR BUILD
gulp.task('optimizeIMG', () => {
    return gulp.src(['./app/assets/images/**/*'])
            .pipe(imagemin({
                progressive: true,
                interlaced: true,
                multipass: true,
            }))
                .pipe(gulp.dest('./dist/assets/images'));
});

//COPY HTML, JS AND CSS FILES INTO BUILD
gulp.task('usemin', function() {
    return gulp.src('./app/index.html')
      .pipe(usemin({
        css: [ rev() ],
        html: [ htmlmin({ collapseWhitespace: true }) ],
        js: [ uglify(), rev() ],
        inlinejs: [ uglify() ],
        inlinecss: [ cssnano() ]
      }))
      .pipe(gulp.dest('./dist'));
  });

gulp.task('build', gulp.series(['deleteDistFolder', 'copy', 'createSprite', 'copySpriteCss', 'optimizeIMG', 'createBundle', 'sass', 'usemin']) );