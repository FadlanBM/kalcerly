# Tauri + Vanilla

This template should help get you started developing with Tauri in vanilla HTML, CSS and Javascript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Running the App

To run the Tauri app in development mode, use the following commands:

```bash
npm install
npm run tauri dev
```

To build the app for production:

```bash
npm run tauri build
```

## Running on Mobile (Tauri v2)

To run the app on Android or iOS, ensure you have the required dependencies (Android Studio, Xcode) installed.

### Android

Initialize the Android project (only needed once):
```bash
npm run tauri android init
```

Run on an Android emulator or connected device:
```bash
npm run tauri android dev
```

### iOS

Initialize the iOS project (only needed once):
```bash
npm run tauri ios init
```

Run on an iOS simulator or connected device:
```bash
npm run tauri ios dev
```
