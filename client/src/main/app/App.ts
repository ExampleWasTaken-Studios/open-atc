import { app, BrowserWindow } from 'electron';
import { optimizer } from '@electron-toolkit/utils';
import { MainWindow } from '../windows/MainWindow';

export class App {
  private static mainWindow: BrowserWindow;
  private static isInit = false;

  public static init(): void {
    if (this.isInit) {
      throw Error(
        'App is already initialized. ' +
          'If you want to create a new main window call ' +
          "'App.createMainWindow()'"
      );
    }
    this.onReady();
    this.handleMacOS();
    this.isInit = true;
  }

  public static getMainWindow(): BrowserWindow {
    if (!this.isInit) {
      throw Error('App not initialized. No main window found.');
    }
    return this.mainWindow;
  }

  private static onReady(): void {
    app.whenReady().then(() => {
      // Default open or close DevTools by F12 in development
      // and ignore CommandOrControl + R in production.
      // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
      app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window);
      });

      this.mainWindow = this.createMainWindow();
    });
  }
  private static createMainWindow(): BrowserWindow {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.whenReady().then(() => {
      // Default open or close DevTools by F12 in development
      // and ignore CommandOrControl + R in production.
      // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
      app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window);
      });
    });

    return new MainWindow().getWindow();
  }

  private static handleMacOS(): void {
    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        App.createMainWindow();
      }
    });
  }
}
