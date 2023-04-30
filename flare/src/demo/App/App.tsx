import { Tag } from '../Tag/Tag';
import { Scene } from '../../components/Scene/Scene';
import { Canvas } from '../../components/Canvas/Canvas';
import { useEffect, useState } from 'react';
import { Rectangle } from '../../components/Geometry/Rectangle';
import { Circle } from '../../components/Geometry/Circle';

const testElements = [
  {
    x: 234,
    y: 443,
    z: 12000,
    rotation: 0,
    width: 105,
    height: 55,
    id: 1,
    children: <Tag />,
    draggable: true,
  },
  {
    x: 789,
    y: 76,
    z: 35000,
    rotation: 0,
    width: 105,
    height: 55,
    id: 2,
    children: <Tag />,
    draggable: true,
  },
  {
    x: 567,
    y: 234,
    z: 5000,
    rotation: 0,
    width: 105,
    height: 55,
    id: 3,
    children: <Tag />,
    draggable: true,
  },
  {
    x: 345,
    y: 467,
    z: 20000,
    rotation: 0,
    width: 105,
    height: 55,
    id: 4,
    children: <Tag />,
    draggable: true,
  },
  {
    x: 901,
    y: 445,
    z: 10000,
    rotation: 0,
    width: 105,
    height: 55,
    id: 5,
    children: <Tag />,
    draggable: true,
  },
];

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};


export const App = () => {

  const [mockElements, setMockElements] = useState(testElements);

  useEffect(() => {
    const i = setInterval(() => {
      const newMockElements = mockElements.map(current => {
        current.x = clamp(getRandomInt(current.x - 10, current.x + 10), 10, 1650);
        current.y = clamp(getRandomInt(current.y - 10, current.y + 10), 10, 1650);
        current.z = getRandomInt(0, 10);
        return current;
      });
      setMockElements(newMockElements);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="h-[900px] flex justify-center items-center">
      <Scene className='w-[1700px] h-[800px]'>
        <Canvas className="w-full h-full border-2 border-red-600 bg-black">
          {mockElements.map((current, index) => {
            return (
              <>
                <Rectangle
                  style="outline"
                  color="green"
                  borderWidth={2}
                  x={current.x}
                  y={current.y}
                  z={current.z}
                  width={current.width}
                  height={current.height}
                  key={current.id}
                >
                  {current.children}
                </Rectangle>
                <Circle
                  style="outline"
                  color="red"
                  borderWidth={1}
                  x={current.x + current.width + 20}
                  y={current.y + current.height + 20}
                  z={current.z}
                  diameter={current.width}
                  key={current.id}
                >
                  {index % 2 === 0 && current.children}
                </Circle>
              </>
            );
          })}
        </Canvas>
      </Scene>
    </div>
  );
};

