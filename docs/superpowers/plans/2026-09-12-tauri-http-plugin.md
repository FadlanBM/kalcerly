# Tauri HTTP Plugin Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install and configure the `@tauri-apps/plugin-http` plugin to enable native HTTP requests from the React frontend, bypassing browser CORS restrictions.

**Architecture:** Use the Tauri v2 CLI to add the HTTP plugin. This automatically updates both the Rust backend (`Cargo.toml`, `src-tauri/src/lib.rs`) and the NPM frontend (`package.json`). Then configure permissions to allow the webview to fetch from backend API domains.

**Tech Stack:** Tauri v2, Rust, React, Vite

## Global Constraints

- Must work on Tauri v2 (mobile-first setup).
- Run commands in `c:\Users\Administrator\Documents\project\tauri-app` directory.

---

### Task 1: Install Plugin Dependencies

**Files:**
- Modify: `package.json`
- Modify: `src-tauri/Cargo.toml`

**Interfaces:**
- Consumes: N/A
- Produces: Installed `@tauri-apps/plugin-http` dependencies in Node and Rust.

- [ ] **Step 1: Stop dev server (if needed) and run Tauri CLI to add plugin**

```powershell
npm run tauri add http
```
*(Tauri CLI v2 automatically injects the Rust and NPM dependencies, and also injects the initialization into `lib.rs` if standard)*

- [ ] **Step 2: Verify `package.json` and `Cargo.toml` updates**
Check if `@tauri-apps/plugin-http` is added to `package.json` and `tauri-plugin-http` is added to `src-tauri/Cargo.toml`.

- [ ] **Step 3: Verify `src-tauri/src/lib.rs`**
Ensure `.plugin(tauri_plugin_http::init())` is added to the `tauri::Builder::default()` chain in `src-tauri/src/lib.rs`. If the CLI failed to add it, add it manually.

### Task 2: Configure Tauri Capabilities/Permissions

**Files:**
- Create/Modify: `src-tauri/capabilities/default.json` (or verify it)
- Modify: `src-tauri/tauri.conf.json`

**Interfaces:**
- Consumes: Tauri HTTP plugin
- Produces: Granted permission to make HTTP requests from the JS layer to the Native Rust plugin.

- [ ] **Step 1: Check capability files**
In Tauri v2, permissions for the HTTP plugin must be enabled. Since we want to allow fetching any backend, we add the core HTTP capabilities. Add the `"http:default"` permission to `tauri.conf.json` or `src-tauri/capabilities/default.json` under `permissions`.

```json
"permissions": [
  "core:default",
  "http:default"
]
```

- [ ] **Step 2: Start the Tauri dev server to ensure it builds successfully**

```powershell
npm run tauri android dev
```

### Task 3: Verify HTTP Request in React (Smoke Test)

**Files:**
- Modify: `src/pages/Login.jsx`

**Interfaces:**
- Consumes: `@tauri-apps/plugin-http`
- Produces: Console log of an HTTP fetch bypassing CORS.

- [ ] **Step 1: Add import and mock fetch**

Add to `src/pages/Login.jsx`:
```javascript
import { fetch } from '@tauri-apps/plugin-http';

// Inside Login component or a button onClick
async function testHttp() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log("Native HTTP Success:", data);
  } catch(e) {
    console.error("Native HTTP Error:", e);
  }
}
```

- [ ] **Step 2: Commit changes**

```bash
git add package.json src-tauri/Cargo.toml src-tauri/src/lib.rs src-tauri/tauri.conf.json src/pages/Login.jsx
git commit -m "feat: setup tauri native http plugin"
```
