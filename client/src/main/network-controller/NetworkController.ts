import { WebSocket } from 'ws';
import { v4 as uuidv4 } from 'uuid';

export class NetworkController {
  private readonly URL = 'wss://socketsbay.com/wss/v2/2/demo/';

  private socket!: WebSocket;
  private connected: boolean;

  private messageHandlers: Map<string, (event: MessageEvent) => void>;
  private errorHandlers: Map<string, (err: Error) => void>;

  constructor() {
    this.connected = false;

    this.messageHandlers = new Map<string, (event: MessageEvent) => void>();
    this.errorHandlers = new Map<string, (err: Error) => void>([
      [
        uuidv4(),
        (err): void => {
          console.log('[NETWORK CONTROLLER] Error occurred:', err);
        },
      ],
    ]);
  }

  public isConnected(): boolean {
    return this.connected;
  }

  public async connect(): Promise<void> {
    if (this.connected) {
      return Promise.reject(
        `Already connected to server at ${this.socket.url}`
      );
    }

    return new Promise<void>((resolve, reject) => {
      this.socket = new WebSocket(this.URL);

      this.socket.onopen = (): void => {
        this.connected = true;
        resolve();
      };

      this.socket.once('error', (err): void => {
        reject(err);
      });
    });
  }

  public async disconnect(force?: boolean): Promise<void> {
    if (!this.connected) {
      return Promise.reject('Not connected to any server');
    }

    return new Promise<void>((resolve, reject) => {
      this.socket.onclose = (): void => {
        this.connected = false;
        resolve();
      };

      this.socket.once('error', err => {
        reject(err);
      });

      if (force) {
        this.socket.terminate();
      } else {
        this.socket.close();
      }
    });
  }

  public addMessageListener(callback: (event: MessageEvent) => void): string {
    const generatedId = uuidv4();
    this.messageHandlers.set(generatedId, callback);
    return generatedId;
  }

  public removeMessageListener(id: string): void {
    if (!this.messageHandlers.delete(id)) {
      throw Error(`No message handler with ID '${id}' found.`);
    }
  }

  public addErrorListener(callback: (err: Error) => void): string {
    const generatedId = uuidv4();
    this.errorHandlers.set(generatedId, callback);
    return generatedId;
  }

  public removeErrorListener(id: string): void {
    if (!this.errorHandlers.delete(id)) {
      throw Error(`No error handler with ID '${id}' found.`);
    }
  }

  public async ping(): Promise<void> {
    this.socket.ping();
  }
}
