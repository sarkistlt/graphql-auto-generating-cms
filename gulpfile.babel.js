import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import del from 'del';

function clean(str) {
  return del([`./lib${str}`]);
}

gulp.task('scss', () => {
  clean('/components/styles.css');
  return gulp.src('./src/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:SideMenu', () => {
  clean('/components/SideMenu.js');
  return gulp.src('./src/components/SideMenu.jsx')
    .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
    .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:List', () => {
  clean('/components/List.js');
  return gulp.src('./src/components/List.jsx')
    .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
    .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:View', () => {
  clean('/components/View.js');
  return gulp.src('./src/components/View.jsx')
    .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
    .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:Layout', () => {
  clean('/index.js');
  return gulp.src('./src/index.jsx')
    .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
    .pipe(gulp.dest('./lib'));
});

gulp.task('build:middleware', () => {
  clean('/middleware.js');
  return gulp.src('./src/middleware.js')
    .pipe(babel({presets: ['es2015', 'stage-0', 'stage-1'], compact: true}))
    .pipe(gulp.dest('./lib'));
});

gulp.task('watch', () => {
  gulp.watch('./src/components/styles.scss', gulp.parallel('scss'));
  gulp.watch('./src/components/SideMenu.jsx', gulp.parallel('build:component:SideMenu'));
  gulp.watch('./src/components/List.jsx', gulp.parallel('build:component:List'));
  gulp.watch('./src/components/View.jsx', gulp.parallel('build:component:View'));
  gulp.watch('./src/index.jsx', gulp.parallel('build:component:Layout'));
  gulp.watch('./src/middleware.js', gulp.parallel('build:middleware'));
});

gulp.task('default', gulp.parallel(
  'scss',
  'build:component:SideMenu',
  'build:component:List',
  'build:component:View',
  'build:component:Layout',
  'build:middleware'
));

