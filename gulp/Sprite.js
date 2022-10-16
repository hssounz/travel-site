var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');



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