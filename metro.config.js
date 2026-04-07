const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Fix: Expo 53 uses extension-less '../Expo.fx' and some resolvers fail on web.
const expoSrc = path.resolve(__dirname, 'node_modules', 'expo', 'src');
config.resolver = config.resolver || {};
const defaultResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '../Expo.fx') {
    const from = (context.originModulePath || '').replace(/\\/g, '/');
    if (from.includes('node_modules/expo/')) {
      const file = platform === 'web' ? 'Expo.fx.web.tsx' : 'Expo.fx.tsx';
      const filePath = path.resolve(expoSrc, file);
      return { type: 'sourceFile', filePath };
    }
  }
  return defaultResolveRequest
    ? defaultResolveRequest(context, moduleName, platform)
    : context.resolveRequest(context, moduleName, platform);
};

module.exports = config; 