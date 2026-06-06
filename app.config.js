module.exports = {
  expo: {
    updates: {
      url: "https://u.expo.dev/99274714-b5df-4ace-96f0-d57ecc87dfd7",
      fallbackToCacheTimeout: 0
    },
    // En bare workflow hay que fijar la versión; mantenerla igual que version al publicar
    runtimeVersion: "1.0.2",
    extra: {
      eas: {
        projectId: "99274714-b5df-4ace-96f0-d57ecc87dfd7"
      }
    },
    name: 'JUMM',
    slug: 'jumm',
    version: '1.0.2',
    orientation: 'portrait',
    icon: './assets/images/8581abf4.png',
    userInterfaceStyle: 'light',
    splash: {
      image: 'assets/images/LOGO JUMM APP.jpg',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.jumm.app',
      buildNumber: "3"
    },
    android: {
      package: 'com.jumm.app',
      versionCode: 18,
      adaptiveIcon: {
        foregroundImage: 'assets/images/8581abf4.png',
        backgroundColor: '#ffffff'
      },
      permissions: [],
      softwareKeyboardLayoutMode: "pan",
      enableProguardInReleaseBuilds: true,
      enableHermes: true,
      jsEngine: "hermes",
      targetSdkVersion: 35,
      // 16 kB: la build está bien (NDK 28, useLegacyPackaging false). Para cumplir con Play Store
      // hace falta Expo SDK 53+ (las .so de SDK 52 no están alineadas a 16 kB). Ver: expo/expo#37440
      supportsRtl: true,
      allowBackup: false
    },
    web: {
      favicon: './assets/images/favicon-32x32.png',
      bundler: 'metro'
    },
    plugins: [
      'expo-font',
      'expo-router',
      'expo-web-browser',
      './plugins/android-16kb.js',
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: '35.0.0',
            ndkVersion: '28.0.12674087',
            abiFilters: ['arm64-v8a'],
            // 16 KB: libs sin comprimir para que AGP 8.5.1+ las alinee en ZIP (requisito Play desde nov 2025)
            useLegacyPackaging: false,
            packagingOptions: {
              jniLibs: {
                useLegacyPackaging: false
              }
            },
            // 16 kB: con SDK 53+ las libs nativas vienen alineadas; en SDK 52 Play sigue avisando
            enableProguardInReleaseBuilds: true,
            enableShrinkResourcesInReleaseBuilds: true,
            proguardFiles: ['proguard-rules.pro'],
            // Configuración de memoria optimizada
            dexOptions: {
              javaMaxHeapSize: '4g'
            }
          }
        }
      ],
      './plugins/android-16kb.js'
    ],
    scheme: 'jumm',
    experiments: {
      tsconfigPaths: true
    },
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "jumm",
            project: "jumm"
          }
        }
      ]
    }
  }
}; 