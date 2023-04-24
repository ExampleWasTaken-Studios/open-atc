import { useState } from 'react';
import { Tag } from '../Tag/Tag';
import { Rectangle } from '../../api/geometry/Rectangle';
import { Circle } from '../../api/geometry/Circle';
import { Canvas } from '../../api/Canvas';

const mockRectangles: Rectangle[] = [
  {
    xPos: 100,
    yPos: 250,
    zPos: 50,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    id: 1,
    children: <Tag />,
  },
  {
    xPos: 250,
    yPos: 150,
    zPos: 350,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    id: 2,
    children: <Tag />,
  },
  {
    xPos: 450,
    yPos: 75,
    zPos: 200,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    id: 3,
    children: <Tag />,
  },
  {
    xPos: 200,
    yPos: 400,
    zPos: 100,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    id: 4,
    children: <Tag />,
  },
  {
    xPos: 75,
    yPos: 100,
    zPos: 450,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    id: 5,
    children: <Tag />,
  },
];
const mockCircles: Circle[] = [
  {
    xPos: 400,
    yPos: 150,
    zPos: 100,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    diameter: 80,
    color: '#00000000',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid #FFC107',
    id: 1,
  },
  {
    xPos: 1200,
    yPos: 300,
    zPos: 50,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    diameter: 60,
    color: '#00000000',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid #FF5733',
    id: 2,
  },
  {
    xPos: 900,
    yPos: 50,
    zPos: 200,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    diameter: 120,
    color: '#00000000',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid #FFC107',
    id: 3,
  },
  {
    xPos: 1650,
    yPos: 450,
    zPos: 300,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    diameter: 100,
    color: '#00000000',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid #FF5733',
    id: 4,
  },
  {
    xPos: 800,
    yPos: 100,
    zPos: 150,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    diameter: 50,
    color: '#00000000',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid #FFC107',
    id: 5,
  },
];
export const App = () => {

  const [rectangles] = useState(mockRectangles);
  const [circles] = useState(mockCircles);

  return (
    <Canvas
      className="w-[1700px] h-[500px] overflow-hidden bg-black"
      devMode
      rectangles={rectangles}
      circles={circles}
    />
  );
};

