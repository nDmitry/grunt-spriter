/*
 * grunt-spriter
 *
 * Copyright (c) 2013 Dmitry Nikitenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        copy: {
            dist: {
                files: [
                    {expand: true, cwd: 'test/fixtures/', src: ['i/**'], dest: 'tmp/'}
                ]
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        spriter: {
            options: {
                targetPath: 'tmp/i/'
            },
            'default': {
                src: 'test/fixtures/css/icons.css',
                dest: 'tmp/css/icons.default.css'
            },
            noOptimization: {
                options: {
                    optimize: false
                },
                src: '<%= spriter.default.src %>',
                dest: 'tmp/css/icons.no-optimization.css'
            },
            inline: {
                options: {
                    inline: true
                },
                src: '<%= spriter.default.src %>',
                dest: 'tmp/css/icons.inline.css'
            },
            filter: {
                options: {
                    filter: ['../i/icons/vacation/', '../i/icons/halloween/']
                },
                src: '<%= spriter.default.src %>',
                dest: 'tmp/css/icons.filter.css'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'copy', 'spriter', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
