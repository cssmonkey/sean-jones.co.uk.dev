
var path = require('path');
var webpackConfig = require('./webpack.config.tests');

module.exports = function (config) {
    config.set({
        frameworks: ["mocha", "chai"],
        files: [
            './tests/**/*_spec.js',
        ],
        preprocessors: {
            './tests/**/*.js': ['webpack', 'babel']
        },
        colors: true,
        reporters: ['mocha'],
        logLevel: config.LOG_INFO,
        autoWatch: true,
        webpack: webpackConfig
    });
};
