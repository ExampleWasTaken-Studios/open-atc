import { ServerControlPanel } from '../../ServerControlPanel/ServerControlPanel';
import { WebSocketManager } from '../../../network/WebSocketManager';
import { Scope } from '../../Scope/Scope';

export const HomeView = () => {
  const wsm = new WebSocketManager();

  return (
    <div className="w-full h-full bg-gray-300 flex flex-row">
      <ServerControlPanel webSocketManager={wsm} className="w-1/6 h-full" />
      <Scope className="w-full h-full" />
    </div>
  );
};
