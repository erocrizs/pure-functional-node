'use strict';

const jsFiles = [
    'Gruntfile.js',
    'src/**/*.js'
];

module.exports = (grunt) => {

    grunt.initConfig({
        eslint: {
            target: jsFiles,
            options: {
                fix: grunt.option('fix')
            }
        },

        mochaTest: {
            test: {
                src: ['test/**/*.js'],
                options: {
                    reporter: 'spec',
                    timeout: 5000,
                    clearRequireCache: true
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('lint', ['eslint']);
};
