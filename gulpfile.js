"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Run local web dev server
var open = require('gulp-open'); // Open URL in web browser

var config = {
	port: 9005,
	devBaseURL: 'http://localhost',
	paths: {
		html: './src/*.html',
		dist: './dist'
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

//task to watch any changes to HTML files in src folder and reflect them in browser on save
gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);

});

gulp.task('default', ['html', 'open', 'watch']);
