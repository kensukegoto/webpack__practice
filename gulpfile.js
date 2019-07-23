const gulp = require("gulp");
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
// webpack
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config"); // webpackの設定ファイルの読み込み

function bundleJs(mode){

  return plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    })
    .pipe(webpackStream(webpackConfig(mode), webpack))
    .pipe(gulp.dest('./dist/'));

}

gulp.task('default',gulp.parallel(
  function(){
    return gulp.watch('./src/main.js',() => bundleJs("development"))
  },
));

gulp.task('build',gulp.parallel(
  function(){
    return gulp.watch('./src/main.js',() => bundleJs("production"))
  },
));