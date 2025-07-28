import { app, BrowserWindow } from 'electron'
import path from 'path'
import { isDev } from './util.js'
import { getPreloadPath } from './pathResolver.js'
import fs from 'fs'

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123');
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist-vue/index.html'));
  }

  return mainWindow;
}

app.on('ready', () => {
  const appDataPath = app.getPath('userData');
  const tourDataPath = path.join(appDataPath, 'tours');

  if(!fs.existsSync(tourDataPath)) {
    fs.mkdirSync(tourDataPath, { recursive: true });
  }

  const tourJsPath = path.join(tourDataPath, 'tours.json');
  if(!fs.existsSync(tourJsPath)) {
    fs.writeFileSync(tourJsPath, '[]');
  }

  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
})
