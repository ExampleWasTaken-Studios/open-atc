import { v4 as uuidv4 } from 'uuid';

export class WebSocketManager {
  private static readonly URL = '';
  public socket: WebSocket;

  private openListeners: Map<string, OpenListener>;
  private messageListeners: Map<string, MessageListener>;
  private closeListeners: Map<string, CloseListener>;
  private errorListeners: Map<string, ErrorListener>;

  private readonly defaultOpenId: string;
  private readonly defaultMessageId: string;
  private readonly defaultCloseId: string;
  private readonly defaultErrorId: string;

  constructor(disableDefaultListeners = false) {
    this.defaultOpenId = uuidv4();
    this.defaultMessageId = uuidv4();
    this.defaultCloseId = uuidv4();
    this.defaultErrorId = uuidv4();

    if (!disableDefaultListeners) {
      this.openListeners = new Map<string, OpenListener>([
        [
          this.defaultOpenId,
          (): void => console.log(`Connected to server at ${this.socket.url}`),
        ],
      ]);

      this.messageListeners = new Map<string, MessageListener>([
        [
          this.defaultMessageId,
          (event): void => {
            console.group('[NETWORK] Received message:');
            console.log('Message:', event.data);
            console.groupEnd();
          },
        ],
      ]);

      this.closeListeners = new Map<string, CloseListener>([
        [
          this.defaultCloseId,
          (event): void =>
            console.log(
              `Disconnected with code ${event.code} (${event.reason})`
            ),
        ],
      ]);

      this.errorListeners = new Map<string, ErrorListener>([
        [
          this.defaultErrorId,
          (event): void => console.error('An error occurred:', event),
        ],
      ]);
    } else {
      this.openListeners = new Map<string, OpenListener>();
      this.messageListeners = new Map<string, MessageListener>();
      this.closeListeners = new Map<string, CloseListener>();
      this.errorListeners = new Map<string, ErrorListener>();
    }

    this.socket = new WebSocket(WebSocketManager.URL);
    this.socket.onopen = (event): void => {
      this.openListeners.forEach(current => {
        current(event);
      });
    };
    this.socket.onmessage = (event): void => {
      this.messageListeners.forEach(current => {
        current(event);
      });
    };
    this.socket.onclose = (event): void => {
      this.closeListeners.forEach(current => current(event));
    };
    this.socket.onerror = (event): void => {
      this.errorListeners.forEach(current => current(event));
    };
  }

  public send(data: string): void {
    this.socket.send(data);
  }

  public disconnect(code?: number, reason?: string): void {
    this.send('d');
    this.socket.close(code, reason);
  }

  public addOpenListener(listener: OpenListener): string {
    const id = uuidv4();
    this.openListeners.set(id, listener);
    return id;
  }

  public removeOpenListener(id: string): void {
    if (!this.openListeners.delete(id)) {
      throw Error(`No open listener with ID ${id} found`);
    }
  }

  public addMessageListener(listener: MessageListener): string {
    const id = uuidv4();
    this.messageListeners.set(id, listener);
    return id;
  }

  public removeMessageListener(id: string): void {
    if (!this.messageListeners.delete(id)) {
      throw Error(`No message listener with ID ${id} found`);
    }
  }

  public addCloseListener(listener: CloseListener): string {
    const id = uuidv4();
    this.closeListeners.set(id, listener);
    return id;
  }

  public removeCloseListener(id: string): void {
    if (!this.closeListeners.delete(id)) {
      throw Error(`No close listener with ID ${id} found`);
    }
  }

  public addErrorListener(listener: ErrorListener): string {
    const id = uuidv4();
    this.errorListeners.set(id, listener);
    return id;
  }

  public removeErrorListener(id: string): void {
    if (!this.errorListeners.delete(id)) {
      throw Error(`No error listener with ID ${id} found`);
    }
  }

  /**
   * This action is irreversible!
   */
  public disableDefaultListeners(): void {
    this.removeOpenListener(this.defaultOpenId);
    this.removeMessageListener(this.defaultMessageId);
    this.removeCloseListener(this.defaultCloseId);
    this.removeErrorListener(this.defaultErrorId);
  }

  public getReadyState(): number {
    return this.socket.readyState;
  }
}

type OpenListener = (event: Event) => void;
type MessageListener = (event: MessageEvent) => void;
type CloseListener = (event: CloseEvent) => void;
type ErrorListener = (event: Event) => void;
