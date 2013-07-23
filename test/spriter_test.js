'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
     test.expect(numAssertions)
     test.done()
     Test assertions:
     test.ok(value, [message])
     test.equal(actual, expected, [message])
     test.notEqual(actual, expected, [message])
     test.deepEqual(actual, expected, [message])
     test.notDeepEqual(actual, expected, [message])
     test.strictEqual(actual, expected, [message])
     test.notStrictEqual(actual, expected, [message])
     test.throws(block, [error], [message])
     test.doesNotThrow(block, [error], [message])
     test.ifError(value)
 */

exports.spriter = {
    'default': function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/css/icons.default.css');
        var expected = grunt.file.read('test/expected/css/icons.default.css');
        test.equal(actual, expected, 'should generate sprite sheet with optimization and without inlining.');

        test.done();
    },
    noOptimization: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/css/icons.no-optimization.css');
        var expected = grunt.file.read('test/expected/css/icons.no-optimization.css');
        test.equal(actual, expected, 'should generate sprite sheet without optimization.');

        test.done();
    },
    inline: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/css/icons.inline.css');
        var expected = grunt.file.read('test/expected/css/icons.inline.css');
        test.equal(actual, expected, 'should generate sprite sheet with inlining.');

        test.done();
    },
    sprite: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/i/sprite.png');
        var expected = grunt.file.read('test/expected/sprites/sprite.png');
        test.equal(actual, expected, 'should generate common sprite sheet file.');

        test.done();
    },
    halloweenSprite: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/i/halloween.png');
        var expected = grunt.file.read('test/expected/sprites/halloween.png');
        test.equal(actual, expected, 'should generate "halloween" sprite sheet file.');

        test.done();
    },
    vacationSprite: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/i/vacation.png');
        var expected = grunt.file.read('test/expected/sprites/vacation.png');
        test.equal(actual, expected, 'should generate "vacation" sprite sheet file.');

        test.done();
    }
};
