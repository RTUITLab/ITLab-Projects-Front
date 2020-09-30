const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "rtuitlab",
    projectName: "projects",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    plugins: [new Dotenv()],
    // modify the webpack config however you'd like to by adding to this object
  });
};
