import { contextBridge, ipcRenderer } from 'electron';
import { channels } from '../shared/channels';


const app = {
  isDev: (): boolean => ipcRenderer.invoke(channels.app.isDev) as unknown as boolean,
};

export const api = {
  app,
  channels,
};

contextBridge.exposeInMainWorld('api', api);
