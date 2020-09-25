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
    }, env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID
    },
};