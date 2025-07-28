import { app, BrowserWindow } from 'electron'
import path from 'path'
import { isDev } from './util.js'

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123');
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist-vue/index.html'));
  }

  return mainWindow;
}

app.on('ready', () => {
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
