const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

id -un
abhaysharma
sudo chown -R abhaysharma /usr/local/lib
sudo chown -R abhaysharma /usr/local/bin
sudo chown -R abhaysharma /Users/abhaysharma
