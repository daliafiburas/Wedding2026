'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ basename: 'styles.min' }))
        .pipe(gulp.dest('./dist/css')); // Salva i file CSS in dist/css
});

// Minify JS
gulp.task('minify-js', function () {
    return gulp.src('./js/scripts.js')
        .pipe(uglify())
        .pipe(rename({ basename: 'scripts.min' }))
        .pipe(gulp.dest('./dist/js')); // Salva i file JS in dist/js
});

// Copy HTML files to dist
gulp.task('copy-html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./dist')); // Copia i file HTML in dist
});

// Copy images to dist
gulp.task('copy-images', function () {
    return gulp.src('./img/**/*') // Percorso delle immagini
        .pipe(gulp.dest('./dist/img')); // Salva le immagini in dist/images
});

// Copy images to dist
gulp.task('copy-fonts', function () {
    return gulp.src('./fonts/**/*') // Percorso delle immagini
        .pipe(gulp.dest('./dist/fonts')); // Salva le immagini in dist/images
});

// Copy images to dist
gulp.task('copy-all', function () {
    return gulp.src('./*') // Percorso delle immagini
        .pipe(gulp.dest('./dist/')); // Salva le immagini in dist/images
});
// Default task
gulp.task('default', gulp.series('copy-all'));