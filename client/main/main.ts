import { app, BrowserWindowConstructorOptions, protocol } from 'electron';
import { join } from 'path';

import { createMainWindow } from './functions/createMainWindow';
import { setupIpc } from './functions/setupIpc';

const mainWindowOptions: BrowserWindowConstructorOptions = {
  width: 900,
  height: 600,
  disableAutoHideCursor: true,
  webPreferences: {
    contextIsolation: false,
    nodeIntegration: true,
  },
};

app.on('ready', () => {
  console.log('app ready');
  protocol.registerFileProtocol('openatc', (request, callback) => {
    const url = request.url.substring(10);
    const filePath = join(__dirname, url);
    callback(filePath);
  });

  createMainWindow(mainWindowOptions);
  setupIpc();
});
