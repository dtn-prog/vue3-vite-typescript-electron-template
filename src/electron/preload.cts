import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  testFunction: () => {
    return 'test';
  }
});
