import { ipcMain as ipc } from 'electron';
import { NetworkController } from '../network-controller/NetworkController';
// TODO: Network control related operations can potentially be handled in the NetworkController class.
const networkController = new NetworkController();
ipc.handle('socket/is-connected', () => {
  return networkController.isConnected();
});

ipc.handle('socket/connect', () => {
  return networkController.connect();
});

ipc.handle('socket/disconnect', (_, force?: boolean) => {
  return networkController.disconnect(force);
});

ipc.handle(
  'socket/add-msg-listener',
  (_, callback: (event: MessageEvent) => void) => {
    return networkController.addMessageListener(callback);
  }
);

ipc.handle('socket/remove-msg-listener', (_, id: string) => {
  return networkController.removeMessageListener(id);
});

ipc.handle('socket/add-err-listener', (_, callback: (err: Error) => void) => {
  return networkController.addErrorListener(callback);
});

ipc.handle('socket/remove-err-listener', (_, id: string) => {
  return networkController.removeErrorListener(id);
});
