var gulp = require('gulp');

// Copy all css files needed
gulp.task('styles', function() {
  return gulp.src([
        'node_modules/shower-ribbon/styles/screen.css'
    ])
    .pipe(gulp.dest('src/css/vendor'));
});

// Copy all js files needed
gulp.task('scripts', function() {
  return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/term.js/src/term.js',
        'node_modules/shower-core/shower.min.js',
    ])
    .pipe(gulp.dest('src/js/vendor'));
});

gulp.task('default', ['styles', 'scripts']);