/* eslint-disable prettier/prettier */
import webpack from "webpack";

export default function webpackConfig(env) {
  // eslint-disable-next-line no-console
  console.log(env); // Use env variable

  const config = {
    module: {
      rules: [], // Add your rules here
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      }),
    ],
  };

  const modifiedConfig = { ...config }; // Create a copy of config

  if (env.production) {
    modifiedConfig.mode = "production";
  } else {
    modifiedConfig.mode = "development";
  }

  return modifiedConfig;
}
