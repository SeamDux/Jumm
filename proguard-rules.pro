# ProGuard rules para soporte 16 kB memory page sizes
# Optimización de memoria para Android 15+

# Mantener clases de React Native
-keep class com.facebook.react.** { *; }
-keep class com.facebook.jni.** { *; }

# Mantener clases de Expo
-keep class expo.modules.** { *; }
-keep class com.swmansion.** { *; }

# Optimización de memoria
-optimizations !code/simplification/arithmetic,!code/simplification/cast,!field/*,!class/merging/*
-optimizationpasses 5
-allowaccessmodification
-dontpreverify

# Configuración para 16 kB page sizes
-keepattributes Signature
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses

# Mantener clases nativas
-keepclasseswithmembernames class * {
    native <methods>;
}

# Configuración de memoria optimizada
-dontwarn com.facebook.react.**
-dontwarn expo.modules.**
