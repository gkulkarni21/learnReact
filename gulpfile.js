"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Run local web dev server
var open = require('gulp-open'); // Open URL in web browser
var browserify = require('browserify'); //Buldle JS
var reactify = require('reactify'); // transofrm React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text stream with gulp
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

var config = {
	port: 9005,
	devBaseURL: 'http://localhost',
	paths: {
		html: './src/*.html',
    js : './src/**/*.js',
    css : [
         'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
		dist: './dist',
    mainJs: './src/main.js'
	}
}

gulp.task('connect', function(){
	connect.server({
	root: ['dist'],
	port: config.port,
	base: config.devBaseURL,
	livereload: true
	});
});

// open task. Format: gulp.task('task-name', ['dependencies'], function())
// this task opens a file at defined URL
gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html') //gulp.src to locate file we want to use
		.pipe(open({ uri: config.devBaseURL + ':' + config.port + '/'})); // pipe to perform action on file we have
});

// task to transfer HTML files from src to dist folder
gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

//task to bundle and transfer js files to dist folder
gulp.task('js', function(){
  browserify(config.paths.mainJs)
    .transform(reactify) //transform JS we get from above path using reactify
    .bundle() //bundle everything that we get ie put it all into one file
    .on('error', console.error.bind(console)) //on error, log to console
    .pipe(source('bundle.js')) //name of our bundle
    .pipe(gulp.dest(config.paths.dist + '/scripts')) //where to store the bundle
    .pipe(connect.reload());
});

//task to concat all the css files
gulp.task('css', function(){
  gulp.src(config.paths.css) //get file from src
    .pipe(concat('bundle.css')) //bundle this all into one css file
    .pipe(gulp.dest(config.paths.dist + '/css')); //put it under path defined
});

gulp.task('lint', function(){
  return gulp.src(config.paths.js)
    .pipe(lint({config: 'eslint.config.json'}))
    .pipe(lint.format());
});

//task to watch any changes to HTML files in src folder and reflect them in browser on save
gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);

});

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);
