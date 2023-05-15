import { Canvas, Circle, Rectangle, Scene } from '@ewt-studios/flare';
import { mockCircles, mockRects } from './mockObjects';
import { useEffect, useState } from 'react';

interface ScopeProps {
  className?: string;
}

export const Scope = ({ className }: ScopeProps) => {
  const [networkController] = useState(window.api.networkController);
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    networkController
      .connect()
      .then(() => {
        setSocketConnected(true);
        console.log('[NETWORK CONTROLLER] Connected to websocket');
      })
      .catch((err: Error) => {
        throw err;
      });

    return () => {
      console.log('useEffect return');
      networkController
        .disconnect()
        .then(() => {
          setSocketConnected(false);
          console.log('[NETWORK CONTROLLER] Disconnected');
        })
        .catch((err: Error) => {
          throw err;
        });
    };
  }, []);

  if (!socketConnected) {
    return <Load />;
  }

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

const Load = () => {
  return <h1>Loading...</h1>;
};
