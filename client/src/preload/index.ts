import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { ipcRenderer } from 'electron';

const networkController = {
  isConnected: (): Promise<boolean> =>
    ipcRenderer.invoke('socket/is-connected'),
  connect: (): Promise<void> => ipcRenderer.invoke('socket/connect'),
  disconnect: (force?: boolean): Promise<void> =>
    ipcRenderer.invoke('socket/disconnect', force),
  addMessageListener: (
    callback: (event: MessageEvent) => void
  ): Promise<string> => ipcRenderer.invoke('socket/add-msg-listener', callback),
  removeMessageListener: (id: string): Promise<void> =>
    ipcRenderer.invoke('socket/remove-msg-listener', id),
  addErrorListener: (callback: (err: Error) => void): Promise<string> =>
    ipcRenderer.invoke('socket/add-err-listener', callback),
  removeErrorListener: (id: string): Promise<void> =>
    ipcRenderer.invoke('socket/remove-err-listener', id),
};

// Custom APIs for renderer
export const api = {
  networkController: networkController,
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
