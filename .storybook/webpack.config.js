require('babel-register');
var mainWebpackConfig = require('../build/webpack.config.js').default;

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.loaders = mainWebpackConfig.module.loaders;
  storybookBaseConfig.sassResources = mainWebpackConfig.sassResources;
  return storybookBaseConfig;
};
