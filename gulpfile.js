var newStyleDestination = "./assets/css/";
var gulp = require("gulp");
var sass = require("gulp-sass");
// let cleanCSS = require("gulp-clean-css");

var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
gulp.task("sass", function() {
  return gulp
    .src("./sass/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(newStyleDestination))
    .pipe(
      notify({
        message: 'TASK: "styles" Completed! 💯',
        onLast: true
      })
    );
});

gulp.task("minify-css", () => {
  return (
    gulp
      .src("styles/*.css")
      // .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(gulp.dest("dist"))
  );
});
gulp.task("default", ["sass"], function() {
  gulp.watch("sass/**/*.scss", ["sass"]);
});
