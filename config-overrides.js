const webpack = require("webpack");

module.exports = function override(config, env) {
  // Conditionally set NODE_ENV to production
  if (env === 'production') {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
      })
    );
  }

  // Handle .mjs files for ES module compatibility
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

  // Ignore specific warnings related to @mediapipe
  config.ignoreWarnings = [
    {
      module: /@mediapipe/,
      message: /Failed to parse source map/,
    },
  ];

  return config;
};
