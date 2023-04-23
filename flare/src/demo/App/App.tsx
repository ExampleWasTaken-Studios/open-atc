import { Canvas } from '../../components/Canvas/Canvas';
import { useState } from 'react';
import { Tag } from '../Tag/Tag';
import { RectangleProps } from '../../components/Geometry/Rectangle';

const mockElements: RectangleProps[] = [
  {
    xPos: 100,
    yPos: 250,
    zPos: 50,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    key: 1,
    children: <Tag />,
  },
  {
    xPos: 250,
    yPos: 150,
    zPos: 350,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    key: 2,
    children: <Tag />,
  },
  {
    xPos: 450,
    yPos: 75,
    zPos: 200,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    key: 3,
    children: <Tag />,
  },
  {
    xPos: 200,
    yPos: 400,
    zPos: 100,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    key: 4,
    children: <Tag />,
  },
  {
    xPos: 75,
    yPos: 100,
    zPos: 450,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    key: 5,
    children: <Tag />,
  },
];
export const App = () => {

  const [rectangles] = useState(mockElements);

  return (
    <Canvas
      className="w-[1700px] h-[500px] overflow-hidden bg-black"
      devMode
      rectangles={rectangles}
    />
  );
};

