/*
 * grunt-spriter
 *
 *
 * Copyright (c) 2013 Dmitry Nikitenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var path = require('path'),
        spriter = require('spriter');

    grunt.registerMultiTask('spriter', 'Analyzes your existing CSS files and either generates spritesheets or inlines' +
        ' them using data URIs and outputs an updated CSS stylesheet. Based on Spriter.', function () {

        var options = this.options({
            targetPath: 'images/generated/',
            spriteName: 'sprite',
            source: '',
            filter: '',
            optimize: true,
            inline: false
        });

        // Returns a target path to sprite file.
        function getTarget (filter) {
            var spriteName, target;

            spriteName = (filter === '') ? options.spriteName : path.basename(filter);

            // Fix for Node 0.8 https://github.com/joyent/node/pull/4536
            if (spriteName.lastIndexOf('/') !== -1) {
                spriteName = spriteName.slice(0, -1);
            }

            target = path.join(path.relative(options.source, options.targetPath), spriteName + '.png');

            return target;
        }

        function adapter (src, dest, source, target, filter, optimize, inline) {
            var result = spriter(src, source, target, filter, optimize, inline);
            grunt.file.write(dest, result);

            return result;
        }

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

            options.source = (options.source === '') ? path.dirname(f.dest) : options.source;

            if (Array.isArray(options.filter)) {
                options.filter.forEach(function (filter) {
                    src = adapter(src, f.dest, options.source, getTarget(filter), filter, options.optimize, options.inline);
                });
            } else {
                adapter(src, f.dest, options.source, getTarget(options.filter), options.filter, options.optimize, options.inline);
            }

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
