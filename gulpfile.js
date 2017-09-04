var gulp = require('gulp');
var apidoc = require('gulp-apidoc');

gulp.task('apidoc', function (done) {
    apidoc({
        src: "api/",
        dest: "doc/apidoc"
    }, done);    
})

gulp.task('default', ['apidoc']);