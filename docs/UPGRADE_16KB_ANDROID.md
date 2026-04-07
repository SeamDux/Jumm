# Cumplir requisito de 16 kB (Google Play)

Google Play exige que las apps que apunten a Android 15+ **soporten tamaño de página de memoria de 16 kB**. Tienes hasta el **31 de mayo de 2026** para corregirlo.

## Estado actual de esta app

- **Expo SDK 52**: la configuración de build está correcta (NDK 28, `useLegacyPackaging: false`, `abiFilters: ['arm64-v8a']`), pero las **bibliotecas nativas** (.so) que incluye Expo 52 se compilaron con alineación de 4 kB.
- Por eso Play Console sigue mostrando "No admite tamaños de página de memoria de 16 kB".

## Solución recomendada: actualizar a Expo SDK 53

El soporte completo de 16 kB está en **Expo SDK 53** (y superior). Ahí las librerías nativas (expo-modules-core, React Native, Reanimated, Screens, etc.) ya vienen compiladas con alineación de 16 kB.

### Pasos (resumen)

1. **Opcional** – Crear `.npmrc` en la raíz del proyecto con:
   ```
   legacy-peer-deps=true
   ```

2. **Actualizar a Expo 53** (en la raíz del proyecto):
   ```bash
   npx expo install expo@^53.0.22 --fix
   npx expo install --fix
   ```

3. **Revisar dependencias** – Algunos paquetes pueden pedir versiones compatibles con SDK 53. Ejecutar:
   ```bash
   npx expo-doctor
   ```

4. **Regenerar el proyecto nativo** (si usas prebuild o tienes carpeta `android/`):
   ```bash
   npx expo prebuild --clean
   ```

5. **Volver a generar el AAB/APK** y subir una nueva versión a Play Console. Tras la revisión, el aviso de 16 kB debería desaparecer.

### Referencias

- [Expo issue #37440](https://github.com/expo/expo/issues/37440) – Recompile your app with 16 KB native library alignment
- [Android: 16 KB page sizes](https://developer.android.com/guide/practices/page-sizes#build)
- [Expo SDK 53 Changelog](https://expo.dev/changelog/sdk-53)
