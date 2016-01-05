var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	gulpif = require('gulp-if'),
	imagemin = require('gulp-imagemin'),
	dest = require('gulp-dest'),
	cache = require('gulp-cache'),
	runSequence = require('run-sequence'),
	sass = require('gulp-sass');



gulp.task('sass', function () {
	return gulp.src('app/sass/master.sass')
		.pipe(sass()) //using gulp-sass
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function () {
	browserSync({
		server: {
			baseDir: './app'
		}
	});
});


gulp.task('useref', function () {

	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cssnano()))
		.pipe(gulpif('*.js', gulp.dest('./')))
		.pipe(gulpif('*.css', gulp.dest('./')))
		.pipe(gulpif('*.html', gulp.dest('./')));
});


gulp.task('images', function () {
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
		// Caching images that ran through imagemin
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('./images'));
});

gulp.task('fonts', function () {
	return gulp.src('app/fonts/**/*.+(ttf|woff|eof|svg)')
		.pipe(gulp.dest('./fonts'));
});


gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('app/sass/master.sass', ['sass']);
	gulp.watch('app/images/**/*.+(png|jpg|jpeg|gif|svg)', ['images']);
	gulp.watch('app/fonts/*', ['fonts']);
	gulp.watch('app/css/master.css', ['useref']);
	//Reloads the browser whenever HTML or JS files changes
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/*.html', ['useref']);
	gulp.watch('app/js/*.js', browserSync.reload);
	gulp.watch('app/js/*.js', ['useref']);

});

gulp.task('default', function (callback) {

	runSequence(['sass', 'browserSync', 'watch'], 'fonts',
		callback);
});
