var gulp = require('gulp'),
webpack = require('webpack'),
browserSync = require('browser-sync').create();


//SCRIPTS TO BUNDLE
gulp.task('createBundle', (callback) => {
    webpack(require('../webpack.config'), (err, stats) => {
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback(); browserSync.reload(); 
    } 
)});