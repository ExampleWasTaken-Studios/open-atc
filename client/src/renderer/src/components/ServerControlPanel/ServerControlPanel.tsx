import { WebSocketManager } from '../../network/WebSocketManager';
import { DefaultButton } from '../util/DefaultButton';

interface ServerControlPanelProps {
  webSocketManager: WebSocketManager;
  className?: string;
}

export const ServerControlPanel = ({
  webSocketManager,
  className,
}: ServerControlPanelProps) => {
  const css = className + 'bg-gray-300 p-2';

  return (
    <div className={css}>
      <p>Status: {webSocketManager.getReadyStateString()}</p>
      <DefaultButton onClick={() => console.log('Connection toggle clicked')}>
        {webSocketManager.getReadyState() == 1 ? 'Disconnect' : 'Connect'}
      </DefaultButton>
    </div>
  );
};
