'use strict';

// VENDOR LIBS
const path = require('path');

const config = {
    //root: __dirname,
    port: 8080,
    scripts: {
        src: 'application/index.js',
        dest: 'js'
    },
    images: {
        src: 'images',
        dest: './build/images/'
    },
    styles: {
        src: [
            'sass/main.scss',
            'components*/**/*.scss',
            'application/**/*.scss'
        ],
        dest: 'css'
    },
    fonts: {
        src: 'fonts',
        dest: 'fonts'
    },
    src: '',
    sync: true,
    dist: 'dist',
    testFiles: './__tests__/**/*.{js,jsx}',
    assetExtensions: [
        'js',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff2?'
    ]

};

module.exports = config;