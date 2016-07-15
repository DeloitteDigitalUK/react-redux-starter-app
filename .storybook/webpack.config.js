require('babel-register');
let mainWebpackConfig = require('../build/webpack.config.js').default;

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.loaders = mainWebpackConfig.module.loaders;
  return storybookBaseConfig;
};
