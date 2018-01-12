module.exports = function(grunt) {
grunt.initConfig({
    htmlConvert: {
        options: {},
        AppTemplates: {
            src: ['src/html/accordion-new.html'],
            dest: 'src/templates/appTemplates.js'
        },
    },
    cssmin: {
        target: {
            files: [{
                expand: true,
                cwd: 'src/css',
                src: ['*.css', '!*.min.css'],
                dest: 'src/css',
                ext: '.min.css'
            }]
        }
    }
});
grunt.loadNpmTasks('grunt-html-convert');
grunt.loadNpmTasks('grunt-contrib-cssmin');
};