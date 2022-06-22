const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { pathToActiveWhen } = require("single-spa");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "raphaelbrodrigues",
    projectName: "forwading-agent-landing",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        }),
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
