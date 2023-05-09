import { Canvas, Circle, Rectangle, Scene } from '@ewt-studios/flare';

const mockRects = [
  {
    x: 300,
    y: 500,
    z: 2,
    width: 200,
    height: 100,
    style: 'outline',
    color: '#32CD32',
    borderWidth: 1,
    children: <div className="text-white">Rectangle 1</div>,
    id: 12345,
  },
  {
    x: 1000,
    y: 200,
    z: 4,
    width: 200,
    height: 100,
    style: 'outline',
    color: '#32CD32',
    borderWidth: 1,
    children: <div className="text-white">Rectangle 2</div>,
    id: 67890,
  },
  {
    x: 800,
    y: 600,
    z: 6,
    width: 200,
    height: 100,
    style: 'outline',
    color: '#32CD32',
    borderWidth: 1,
    children: <div className="text-white">Rectangle 3</div>,
    id: 24680,
  },
  {
    x: 200,
    y: 100,
    z: 1,
    width: 200,
    height: 100,
    style: 'outline',
    color: '#32CD32',
    borderWidth: 1,
    children: <div className="text-white">Rectangle 4</div>,
    id: 13579,
  },
  {
    x: 1200,
    y: 400,
    z: 8,
    width: 200,
    height: 100,
    style: 'outline',
    color: '#32CD32',
    borderWidth: 1,
    children: <div className="text-white">Rectangle 5</div>,
    id: 35791,
  },
];

const mockCircles = [
  {
    x: 1200,
    y: 652,
    z: 5,
    diameter: 100,
    style: 'outline',
    color: '#FFA500',
    borderWidth: 1,
    children: <div className="text-white">Circle 1</div>,
    id: 12345,
  },
  {
    x: 1054,
    y: 386,
    z: 8,
    diameter: 100,
    style: 'outline',
    color: '#FFA500',
    borderWidth: 1,
    children: <div className="text-white">Circle 2</div>,
    id: 67890,
  },
  {
    x: 281,
    y: 290,
    z: 4,
    diameter: 100,
    style: 'outline',
    color: '#FFA500',
    borderWidth: 1,
    children: <div className="text-white">Circle 3</div>,
    id: 24680,
  },
  {
    x: 574,
    y: 77,
    z: 2,
    diameter: 100,
    style: 'outline',
    color: '#FFA500',
    borderWidth: 1,
    children: <div className="text-white">Circle 4</div>,
    id: 13579,
  },
  {
    x: 759,
    y: 485,
    z: 1,
    diameter: 100,
    style: 'outline',
    color: '#FFA500',
    borderWidth: 1,
    children: <div className="text-white">Circle 5</div>,
    id: 35791,
  },
];

export const Scope = () => {
  return (
    <Scene className="w-[1700px] h-[800px]">
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
  );
};
