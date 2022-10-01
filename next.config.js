module.exports = {
  target: 'serverless',
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
    };
  },
};
