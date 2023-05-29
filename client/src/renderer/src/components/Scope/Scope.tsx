import { Canvas, Circle, Rectangle, Scene } from '@ewt-studios/flare';
import { mockCircles, mockRects } from './mockObjects';

interface ScopeProps {
  className?: string;
}

export const Scope = ({ className }: ScopeProps) => {
  /*const webSocketManager = useWebSocket();

  if (
    !webSocketManager ||
    webSocketManager.getReadyState() !== WebSocket.OPEN
  ) {
    return <Load />;
  }*/

  return (
    <div className={className}>
      <Scene className="w-full h-full">
        <Canvas className="bg-black">
          <>
            {mockRects.map(current => {
              return (
                <Rectangle
                  width={current.width}
                  height={current.height}
                  style={current.style as 'outline' | 'fill'}
                  color={current.color}
                  borderWidth={current.borderWidth}
                  x={current.x}
                  y={current.y}
                  z={current.z}
                  key={current.id}
                >
                  {current.children}
                </Rectangle>
              );
            })}

            {mockCircles.map(current => {
              return (
                <Circle
                  diameter={current.diameter}
                  style={current.style as 'outline' | 'fill'}
                  color={current.color}
                  borderWidth={current.borderWidth}
                  x={current.x}
                  y={current.y}
                  z={current.z}
                  key={current.id}
                >
                  {current.children}
                </Circle>
              );
            })}
          </>
        </Canvas>
      </Scene>
    </div>
  );
};

/*const Load = () => {
  return <h1>Loading...</h1>;
};*/
