const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const react = require("react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = {
    output: {
      libraryTarget: "system",
      filename: "rtuitlab-projects.js",
      path: path.resolve(__dirname, "./deploy/ITLab-Projects-Front"),
    },
    entry: "./src/rtuitlab-projects.js",
    module: {
      rules: [
        {
          parser: {
            system: false,
          },
        },
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("babel-loader", { paths: [__dirname] }),
          },
        },
        {
          test: /\.css$/i,
          include: [/node_modules/, /src/],
          use: [
            {
              loader: require.resolve("style-loader", { paths: [__dirname] }),
            },
            {
              loader: require.resolve("css-loader", { paths: [__dirname] }),
              options: {
                modules: false,
              },
            },
          ],
        },
      ],
    },
    devtool: "sourcemap",
    devServer: {
      compress: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
    },
    externals: ["single-spa"],
    resolve: {
      extensions: [".js", ".mjs", ".jsx", ".wasm", ".json"],
    },
  };

  console.log(defaultConfig.externals);

  return webpackMerge.smart(defaultConfig, {
    // plugins: [new Dotenv()],
    // modify the webpack config however you'd like to by adding to this object
  });
};
