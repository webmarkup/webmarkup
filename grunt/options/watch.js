var files = {
    sass: 'sass/**/*.scss',
    html: 'things/**/*.html'
}

module.exports = {
    options: {
        livereload: true,
    },
    sass: {
        files: [files.sass],
        tasks: ['sass', 'autoprefixer']
    },
    html: {
        files: [files.html]
    }
};