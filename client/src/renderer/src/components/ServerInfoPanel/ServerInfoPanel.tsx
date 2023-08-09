import { WebSocketManager } from '../../network/WebSocketManager';

interface ServerInfoPanelProps {
  webSocketManager: WebSocketManager;
  className?: string;
}

export const ServerInfoPanel = ({
  webSocketManager,
  className,
}: ServerInfoPanelProps) => {
  const css = className + 'bg-gray-300 p-2';

  return (
    <div className={css}>
      <h3 className="font-bold">SRVR INFO</h3>
      <p>Status: {webSocketManager.getReadyStateString()}</p>
      <p>Speed: N/A</p>
    </div>
  );
};
