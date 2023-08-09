import { WebSocketManager } from '../../network/WebSocketManager';
import { DefaultButton } from '../util/DefaultButton';
import { useState } from 'react';

interface ServerControlPanelProps {
  webSocketManager: WebSocketManager;
  className?: string;
}

export const ServerControlPanel = ({
  webSocketManager,
  className,
}: ServerControlPanelProps) => {
  const css = className + 'bg-gray-300 p-2';

  const [buttonDisabledState, setButtonDisabledState] = useState(false);

  return (
    <div className={css}>
      <h3 className="font-bold">SRVR CNTRL PNL</h3>
      <p>Status: {webSocketManager.getReadyStateString()}</p>
      <DefaultButton
        onClick={() => {
          console.log('Connection toggle clicked.');
          setButtonDisabledState(true);
          setTimeout(() => setButtonDisabledState(false), 3000);
        }}
        disabled={buttonDisabledState}
      >
        {webSocketManager.getReadyState() == 1 ? 'Disconnect' : 'Connect'}
      </DefaultButton>
    </div>
  );
};
