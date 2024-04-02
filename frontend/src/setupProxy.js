const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/healthcheck",
    createProxyMiddleware({
      target: "http://backend",
      pathRewrite: { "^/healthcheck": "/healthcheck" }
    })
  );
};
