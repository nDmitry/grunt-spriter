# grunt-spriter [![Build Status](https://travis-ci.org/nDmitry/grunt-spriter.png?branch=master)](https://travis-ci.org/nDmitry/grunt-spriter)

Analyzes your existing CSS files and either generates highly optimized sprite sheets using a growing binary tree bin-packing algorithm or inlines them using data URIs and outputs an updated CSS stylesheet.

It even groups your retina and non-retina images into separate sprite sheets to reduce load times.

Based on [spriter](https://github.com/unfold/spriter).

## Getting Started

This plugin requires Grunt `~0.4.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

To install _Cairo_ library, check out the node-canvas [wiki](https://github.com/learnboost/node-canvas/wiki).

```shell
npm install grunt-spriter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-spriter');
```

## The "spriter" task

### Overview
In your project's Gruntfile, add a section named `spriter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  spriter: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.target
Type: `String`
Default value: `images/generated/sprites.png`

Target path relative to input (required unless generating inline).

#### options.source
Type: `String`
Default value: no

Source path relative to input.

#### options.filter
Type: `String`
Default value: no

Source url filter (e.g: images/sprites).

#### options.inline
Type: `Boolean`
Default value: `false`

Just inline images as data URIs.

#### options.optimize
Type: `Boolean`
Default value: `true`

Disable rule optimization.

### Usage Examples

```js
grunt.initConfig({
  spriter: {
    dist: {
      options: {
        target: '../i/sprite.png',
        source: 'out/css'
      },
      src: 'out/css/main.css',
      dest: 'out/css/main.css'
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 Dmitry Nikitenko. Licensed under the MIT license.
