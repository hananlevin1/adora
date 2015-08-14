var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    typographic = require('typographic'),    
    stylus = require('gulp-stylus'),
    rupture = require('rupture');


var paths = {
    cssSource: 'src/styl/',
    cssDestination: 'assets/css/'
};

gulp.task('styles', function() {
    return gulp.src(paths.cssSource + '**/*.styl')
	.pipe(sourcemaps.init())
	.pipe(stylus({
            use:[
		rupture(),
		typographic()		
	    ]
	}))    
	.pipe(postcss([
	    lost(),
	    autoprefixer()
	    
	]))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.styl', ['styles']);

gulp.task('default', ['styles']);
