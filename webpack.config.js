const path = require('path');

module.exports = async function (env, argv) {
  const createWebpackConfig = require('@expo/webpack-config');
  const config = await createWebpackConfig(env, argv);

  // Fix: Expo 53 uses extension-less '../Expo.fx'; Webpack fails to resolve it on web.
  const expoFxWeb = path.resolve(__dirname, 'node_modules', 'expo', 'src', 'Expo.fx.web.tsx');
  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '../Expo.fx': expoFxWeb,
  };

  return config;
};
