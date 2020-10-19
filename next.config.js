//const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()
//require('dotenv').config();

module.exports = {
    target: 'serverless',
    trailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' }
        };
    }
};