/*
 * grunt-spriter
 *
 *
 * Copyright (c) 2013 Dmitry Nikitenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var spriter = require('spriter');

    grunt.registerMultiTask('spriter', 'Analyzes your existing CSS files and either generates spritesheets or inlines' +
        ' them using data URIs and outputs an updated CSS stylesheet. Based on Spriter.', function () {

        var options = this.options({
            target: 'images/generated/sprites.png',
            source: '',
            filter: '',
            optimize: true,
            inline: false
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {

            // Concat specified files.
            var src = f.src.filter(function (filepath) {

                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }

            }).map(function (filepath) {

                    // Read file source.
                    return grunt.file.read(filepath);
                }
            ).join('');

            // Write the destination file.
            grunt.file.write(f.dest, spriter(src, options.source, options.target, options.filter, options.optimize, options.inline));

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
