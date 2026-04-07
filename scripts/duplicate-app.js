/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const SOURCE_APP_NAME = "Orar con Jesús";
const SOURCE_SLUG = "orarconjesus";
const SOURCE_PACKAGE = "com.orarconjesus.app";
const SOURCE_SCHEME = "orarconjesus";
const SOURCE_EXPO_PROJECT_ID = "bf6414f8-8793-416a-a967-8141f890fb15";
const SOURCE_EXPO_UPDATES_URL = `https://u.expo.dev/${SOURCE_EXPO_PROJECT_ID}`;
const SOURCE_ANDROID_PACKAGE_PATH = "com/orarconjesus/app";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

function usage() {
  console.log(`
Uso:
  node scripts/duplicate-app.js --target "<ruta-o-carpeta>" --app-name "<nombre visible>" --slug "<slug>" --package "<com.tu.app>" --scheme "<scheme>"

Ejemplo:
  node scripts/duplicate-app.js --target "../Orar-con-Maria" --app-name "Orar con María" --slug "orarconmaria" --package "com.orarconmaria.app" --scheme "orarconmaria"
`);
}

function ensureRequired(value, label) {
  if (!value || typeof value !== "string") {
    throw new Error(`Falta el parámetro requerido: ${label}`);
  }
}

function copyDirectoryRecursive(sourceDir, targetDir) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(sourceDir, entry.name);
    const destPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === ".git" || entry.name === "node_modules" || entry.name === ".expo") {
        continue;
      }
      copyDirectoryRecursive(srcPath, destPath);
      continue;
    }

    fs.copyFileSync(srcPath, destPath);
  }
}

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf8");
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  fs.writeFileSync(filePath, content, "utf8");
}

function moveAndroidPackageFolders(baseDir, newPackage) {
  const fromPath = path.join(baseDir, "android", "app", "src", "main", "java", SOURCE_ANDROID_PACKAGE_PATH);
  if (!fs.existsSync(fromPath)) return;

  const packageParts = newPackage.split(".");
  const packagePath = path.join(...packageParts);
  const toPath = path.join(baseDir, "android", "app", "src", "main", "java", packagePath);

  fs.mkdirSync(toPath, { recursive: true });

  const files = fs.readdirSync(fromPath, { withFileTypes: true });
  for (const file of files) {
    if (!file.isFile()) continue;
    fs.renameSync(path.join(fromPath, file.name), path.join(toPath, file.name));
  }

  const javaRoot = path.join(baseDir, "android", "app", "src", "main", "java");
  const sourceComDir = path.join(javaRoot, "com");
  removeEmptyFolders(sourceComDir);
}

function removeEmptyFolders(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const children = fs.readdirSync(dirPath);
  for (const child of children) {
    const childPath = path.join(dirPath, child);
    if (fs.statSync(childPath).isDirectory()) {
      removeEmptyFolders(childPath);
    }
  }
  const remaining = fs.readdirSync(dirPath);
  if (remaining.length === 0) {
    fs.rmdirSync(dirPath);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  ensureRequired(args.target, "--target");
  ensureRequired(args["app-name"], "--app-name");
  ensureRequired(args.slug, "--slug");
  ensureRequired(args.package, "--package");
  ensureRequired(args.scheme, "--scheme");

  const packageRegex = /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)+$/;
  if (!packageRegex.test(args.package)) {
    throw new Error("El parámetro --package no tiene formato válido. Ejemplo: com.empresa.miapp");
  }

  const sourceRoot = process.cwd();
  const targetRoot = path.resolve(sourceRoot, args.target);

  if (fs.existsSync(targetRoot)) {
    throw new Error(`La carpeta de destino ya existe: ${targetRoot}`);
  }

  copyDirectoryRecursive(sourceRoot, targetRoot);

  const replacements = [
    [SOURCE_APP_NAME, args["app-name"]],
    [SOURCE_SLUG, args.slug],
    [SOURCE_PACKAGE, args.package],
    [SOURCE_SCHEME, args.scheme],
    [SOURCE_EXPO_PROJECT_ID, "YOUR_NEW_EXPO_PROJECT_ID"],
    [SOURCE_EXPO_UPDATES_URL, "https://u.expo.dev/YOUR_NEW_EXPO_PROJECT_ID"],
  ];

  const filesToUpdate = [
    "app.config.js",
    "package.json",
    "android/app/src/main/AndroidManifest.xml",
    "android/app/src/main/res/values/strings.xml",
    "android/app/build.gradle",
    "android/app/src/main/java/com/orarconjesus/app/MainApplication.kt",
    "android/app/src/main/java/com/orarconjesus/app/MainActivity.kt",
  ];

  for (const relativePath of filesToUpdate) {
    replaceInFile(path.join(targetRoot, relativePath), replacements);
  }

  moveAndroidPackageFolders(targetRoot, args.package);

  console.log("Clonado completado.");
  console.log(`Nueva app creada en: ${targetRoot}`);
  console.log("");
  console.log("Siguientes pasos recomendados:");
  console.log("1) cd <nueva-carpeta>");
  console.log("2) npm install");
  console.log("3) npx expo prebuild --clean");
  console.log("4) npx eas project:init  (para crear nuevo projectId)");
  console.log("5) npx expo run:android");
}

main();
