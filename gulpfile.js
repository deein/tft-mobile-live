const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');

function js() {
  return src(['./node_modules/jquery/dist/jquery.min.js',
  './node_modules/bootstrap/dist/js/bootstrap.min.js',
  './www/dev/js/app.js'],
  { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('./www/js', { sourcemaps: true }))
}

exports.js = js;
exports.default = parallel(js);
