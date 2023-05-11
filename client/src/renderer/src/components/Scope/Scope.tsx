import { Canvas, Circle, Rectangle, Scene } from '@ewt-studios/flare';
import { mockCircles, mockRects } from './mockObjects';
import { useEffect, useState } from 'react';

interface ScopeProps {
  className?: string;
}

export const Scope = ({ className }: ScopeProps) => {
  console.log('WINDOW:', window);
  const [networkController] = useState(window.api.networkController);
  const [connectedToServer, setConnectedToServer] = useState(false);

  useEffect(() => {
    networkController
      .connect()
      .then(() => {
        setConnectedToServer(true);
      })
      .catch((err: Error) => {
        throw err;
      });

    return () => {
      networkController
        .disconnect()
        .then(() => {
          console.log('[NETWORK CONTROLLER] Disconnected');
        })
        .catch((err: Error) => {
          throw err;
        });
    };
  }, []);

  if (!connectedToServer) {
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
