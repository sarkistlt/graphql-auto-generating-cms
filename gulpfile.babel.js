import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';

gulp.task('scss', () => {
    return gulp.src('./src/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:SideMenu', () => {
    return gulp.src('./src/components/SideMenu.js')
        .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
        .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:List', () => {
    return gulp.src('./src/components/List.js')
        .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
        .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:View', () => {
    return gulp.src('./src/components/View.js')
        .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
        .pipe(gulp.dest('./lib/components'));
});

gulp.task('build:component:Layout', () => {
    return gulp.src('./src/index.js')
        .pipe(babel({presets: ['react', 'es2015', 'stage-0', 'stage-1'], compact: true}))
        .pipe(gulp.dest('./lib'));
});

gulp.task('build:middleware', () => {
    return gulp.src('./src/middleware.js')
        .pipe(babel({presets: ['es2015', 'stage-0', 'stage-1'], compact: true}))
        .pipe(gulp.dest('./lib'));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', gulp.parallel('build:component'));
    gulp.watch('./src/**/*.js', gulp.parallel('build:middleware'));
    gulp.watch('./src/**/*.scss', gulp.parallel('scss'));
});