const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()
require('dotenv').config();

module.exports = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' }
        };
    },
    webpack: config => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    }
};