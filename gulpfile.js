var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    modularscale = require('postcss-modular-scale');

var paths = {
    cssSource: 'src/css/',
    cssDestination: 'assets/css/'
};

gulp.task('styles', function() {
    return gulp.src(paths.cssSource + '**/*.css')
	.pipe(sourcemaps.init())
	.pipe(postcss([
	    lost(),
	    autoprefixer(),
	    modularscale()
	    
	]))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.css', ['styles']);

gulp.task('default', ['styles']);
