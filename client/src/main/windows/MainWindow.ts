import { BrowserWindow, shell } from 'electron';
import { is } from '@electron-toolkit/utils';
import { join } from 'path';

export class MainWindow {
  private readonly window: BrowserWindow;

  private static readonly WINDOW_OPTIONS = {
    width: 900,
    height: 670,
    show: false,
    resizable: is.dev,
    fullscreen: !is.dev,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  };

  constructor() {
    this.window = new BrowserWindow(MainWindow.WINDOW_OPTIONS);
    this.window.setMenuBarVisibility(false);
    this.registerWindowListeners();
    this.forwardLinksToShell();
    this.loadRendererBase();
  }

  public getWindow(): BrowserWindow {
    return this.window;
  }

  private registerWindowListeners(): void {
    this.window.on('ready-to-show', () => {
      this.window.show();
    });
  }

  private forwardLinksToShell(): void {
    this.window.webContents.setWindowOpenHandler(details => {
      shell.openExternal(details.url);
      return { action: 'deny' };
    });
  }

  private loadRendererBase(): void {
    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      this.window.loadURL(process.env['ELECTRON_RENDERER_URL']);
    } else {
      this.window.loadFile(join(__dirname, '../renderer/index.html'));
    }
  }
}
