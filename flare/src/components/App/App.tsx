import { Canvas, Point } from '../Canvas/Canvas';

const mockPoints: Point[] = [
  {
    x: 23,
    y: 54,
    z: 0,
    rotation: 124,
    width: 60,
    height: 30,
    className: '',
    key: 0,
  },
  {
    x: 68,
    y: 37,
    z: 0,
    rotation: 280,
    width: 60,
    height: 30,
    className: '',
    key: 1,
  },
  {
    x: 89,
    y: 6,
    z: 0,
    rotation: 42,
    width: 60,
    height: 30,
    className: '',
    key: 2,
  },
  {
    x: 15,
    y: 73,
    z: 0,
    rotation: 199,
    width: 60,
    height: 30,
    className: '',
    key: 3,
  },
  {
    x: 46,
    y: 92,
    z: 0,
    rotation: 312,
    width: 60,
    height: 30,
    className: '',
    key: 4,
  },
];


export const App = () => {
  return (
    <>
      <Canvas
        className="w-screen h-400"
        devMode
        points={mockPoints}
      />
    </>
  );
};
