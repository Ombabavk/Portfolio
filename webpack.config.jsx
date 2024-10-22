import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin"; // Import HtmlWebpackPlugin
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // Import MiniCssExtractPlugin

export default function webpackConfig(env) {
  // eslint-disable-next-line no-console
  if (env.NODE_ENV !== 'production') {
    console.log(env); // Use env variable for debugging in development
  }

  const config = {
    mode: env.production ? "production" : "development", // Set mode based on env
    module: {
      rules: [
        {
          test: /\.jsx?$/, // Handle JavaScript and JSX files
          exclude: /node_modules/,
          use: {
            loader: "babel-loader", // Use Babel for transpiling
          },
        },
        {
          test: /\.css$/, // Handle CSS files
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        // Add more rules as needed (e.g., for images, fonts, etc.)
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html", // Path to your HTML template
        filename: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css", // Output CSS file name
        chunkFilename: "[id].css",
      }),
    ],
    output: {
      path: __dirname + "/dist", // Output directory
      filename: "[name].bundle.js", // Output file name
      publicPath: "/", // Public URL of the output directory
    },
    devtool: env.production ? false : "source-map", // Enable source maps in development
  };

  return config;
}
