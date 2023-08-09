import { ServerControlPanel } from '../../ServerControlPanel/ServerControlPanel';
import { WebSocketManager } from '../../../network/WebSocketManager';
import { Scope } from '../../Scope/Scope';
import { ServerInfoPanel } from '../../ServerInfoPanel/ServerInfoPanel';

export const HomeView = () => {
  const wsm = new WebSocketManager();

  return (
    <div className="w-full h-full bg-gray-300 flex flex-row">
      <ServerControlPanel webSocketManager={wsm} className="w-1/12 h-full" />
      <Scope className="w-11/12 h-full" />
      <ServerInfoPanel webSocketManager={wsm} className="w-1/12 h-full" />
    </div>
  );
};
