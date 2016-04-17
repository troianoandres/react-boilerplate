'use strict';

// VENDOR LIBS
let path = require('path');

const config = {
    //root: __dirname,
    port: 8080,
    scripts: {
        src: 'application/index.js',
        dest: 'dist/js'
    },
    images: {
        src: './app/images/**/*.{jpeg,jpg,png,gif}',
        dest: './build/images/'
    },
    styles: {
        src: [
            'sass/main.scss',
            'components-*/**/*.scss',
            'application-*/**/*.scss'
        ],
        dest: path.join(this.dist + 'css')
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