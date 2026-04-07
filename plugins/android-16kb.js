/**
 * Config plugin para cumplir requisito 16 KB de Google Play (tamaño de página de memoria).
 * Fuerza solo ABI arm64-v8a en el build Android para evitar .so no alineadas de x86/x86_64.
 * Ver: https://developer.android.com/guide/practices/page-sizes?hl=es-419#build
 */
const { withGradleProperties } = require('@expo/config-plugins');
const { updateAndroidBuildProperty } = require('@expo/config-plugins/build/android/BuildProperties');

function withAndroid16KbGradleProperties(config) {
  return withGradleProperties(config, (config) => {
    const props = config.modResults;
    updateAndroidBuildProperty(props, 'reactNativeArchitectures', 'arm64-v8a');
    config.modResults = props;
    return config;
  });
}

module.exports = function withAndroid16Kb(config) {
  return withAndroid16KbGradleProperties(config);
};
