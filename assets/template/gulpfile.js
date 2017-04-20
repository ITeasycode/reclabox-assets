"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

const path = {
    build: {
        js: 'public/js/',
        html: 'public/',
        css: 'public/css/',
        fonts: 'public/fonts/',
        img: 'public/img/'
    },
    src: {
        js: 'src/js/init.js',
        html: 'src/*.html',
        style: 'src/sass/**/*.scss',
        fonts: 'src/fonts/**/*.*',
        img: 'src/img/**/*.*'
    },
    watch: {
        style: 'src/sass/**/*.scss',
        html: 'src/*.html',
        js: 'src/js/components/*.js',
        img: 'src/img/**/*.*'
    },
    clean: './public'
};

gulp.task('html:build', function() {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulpIf(isDevelopment, sourcemaps.init())) //Инициализируем sourcemap
        .pipe(gulpIf(!isDevelopment, uglify())) //Сожмем наш js для продакшина
        .pipe(gulpIf(isDevelopment, sourcemaps.write())) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(browserSync.stream()); //И перезагрузим сервер
});

gulp.task('style:build', function () {

    return gulp.src(path.src.style)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('img:build', function() {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
});

gulp.task('server', function() {
    browserSync.init({
        server: './public'
    });

    gulp.watch([path.watch.style], ['style:build']);
    gulp.watch([path.watch.js], ['js:build']);
    gulp.watch([path.watch.html], ['html:build']);
});

gulp.task('build', ['html:build', 'style:build', 'js:build', 'fonts:build', 'img:build']);

gulp.task('default', ['build', 'server']);
