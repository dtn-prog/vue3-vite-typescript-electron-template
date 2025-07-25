# Vue 3 + Vite + TypeScript + Electron Template

This project is a modern boilerplate for building cross-platform desktop applications using:
- **Vue 3** (frontend UI)
- **Vite** (fast build tool)
- **TypeScript** (type safety)
- **Electron** (desktop app shell)

## Features
- ⚡️ Instant hot-reload development with Vite
- 🖥️ Electron integration for desktop apps
- 📝 TypeScript support throughout
- 📦 Easy packaging for Windows, macOS, and Linux
- 🗂️ Pinia for state management
- 🧪 Unit testing with Vitest
- 🧹 Linting with ESLint

## Directory Structure
```
├── src/
│   ├── electron/      # Electron main process code
│   └── ui/            # Vue 3 frontend code
│       ├── assets/    # Static assets
│       ├── components/# Vue components
│       ├── stores/    # Pinia stores
│       └── main.ts    # Frontend entry
├── dist-vue/          # Built frontend (after build)
├── package.json       # Project scripts and dependencies
├── vite.config.ts     # Vite configuration
├── electron-builder.json # Electron packaging config
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Development
Run both the Vite dev server and Electron in development mode:
```bash
npm run dev
```

- The frontend runs on [http://localhost:5123](http://localhost:5123)
- Electron will open a window loading the dev server

### 3. Build for Production (Frontend only)
Build the Vue frontend and check TypeScript types:
```bash
npm run build
```

### 4. Package Desktop App (Electron)
To create a distributable desktop app, Electron code must be transpiled first, then the frontend is built, then packaging is done. Use the following commands for your OS:
- **Windows:**
  ```bash
  npm run dist:win
  ```
- **macOS:**
  ```bash
  npm run dist:mac
  ```
- **Linux:**
  ```bash
  npm run dist:linux
  ```

These scripts will:
1. Transpile Electron main process code (`npm run transpile:electron`)
2. Build the frontend (`npm run build`)
3. Package the app with Electron Builder

### 5. Lint & Test
- Lint code:
  ```bash
  npm run lint
  ```
- Run unit tests:
  ```bash
  npm run test:unit
  ```

## Technologies Used
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Electron](https://www.electronjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)

## License
[MIT](LICENSE)
