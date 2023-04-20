import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

export const createMainWindow = (options: BrowserWindowConstructorOptions): BrowserWindow => {
  console.log('creating window...');
  const window = new BrowserWindow(options);

  if (process.env.NODE_ENV === 'development') {
    window.loadURL('http://localhost:3000');
  } else {
    window.loadURL('openatc://../renderer/index.html');
  }

  window.on('ready-to-show', () => {
    window.show();
  });

  return window;
};
