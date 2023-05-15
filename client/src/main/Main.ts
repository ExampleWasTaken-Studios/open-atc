import { App } from './app/App';
import './IPC/ipc';

export class Main {
  public static main(): void {
    App.init();
  }
}
