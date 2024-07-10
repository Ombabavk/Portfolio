const webpack = require('webpack');

module.exports = function override(config, env) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }));

  config.module.rules.push({
    test: /\.mjs$/,
    resolve: {
      fullySpecified: false,
    },
  });

  config.ignoreWarnings = [
    {
      module: /@mediapipe/,
      message: /Failed to parse source map/,
    },
  ];

  return config;
};