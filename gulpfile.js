'use strict'

var gulp = require('gulp')
var gulpUtil = require('gulp-util')
var babel = require('gulp-babel')
var standard = require('gulp-standard')
var sequence = require('run-sequence')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

var paths = {
  APP: './src',
  LIB: './lib',
  BUILD: './dist'
}

var makeBundler = function (file, args) {
  return browserify(paths.APP + '/' + file, args)
    .transform('babelify')
    .external([])
}

gulp.task('lib', function () {
  gulp
    .src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(paths.LIB))
})

gulp.task('build', () => {
  var bundler = makeBundler('index.js')
  return bundler
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest(paths.BUILD))
})

gulp.task('watch', () => {
  var args = Object.assign(watchify.args, { debug: true })
  var bundler = watchify(makeBundler('index.js', args))

  bundler.on('update', function () {
    make(bundler)
    gulpUtil.log("Bundle '" + gulpUtil.colors.cyan('ready') + "' after " + gulpUtil.colors.magenta('0.10 s'))
  })

  function make (bundler) {
    return bundler
      .bundle()
      .on('error', function (error) {
        gulpUtil.log(error.toString())
        this.emit('end')
      })
      .pipe(source('index.js'))
      .pipe(gulp.dest(paths.BUILD))
  };

  return make(bundler)
})

gulp.task('standard', () => {
  return gulp
    .src(paths.APP + '/**/*.js')
    .pipe(standard())
    .pipe(standard.reporter('default', { breakOnError: true, quiet: true }))
})

gulp.task('default', [], function (done) {
  sequence('lib', 'build', function () {
    done()
  })
})
