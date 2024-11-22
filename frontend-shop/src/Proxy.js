const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://spes.pscgh.com:442',
      changeOrigin: true,
    })
  );
};