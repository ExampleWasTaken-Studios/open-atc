import { Rectangle, RectangleProps } from '../Geometry/Rectangle';

interface CanvasProps {
  rectangles: RectangleProps[];
  // circles: CircleProps[];
  className?: string;
  devMode?: boolean;
}

export const Canvas = ({ rectangles, className, devMode }: CanvasProps) => {

  devMode ? className += ' border-red-600 border-2' : null;

  return (
    <div
      className={className}
    >
      {
        rectangles.map(current => {
          return (
            <Rectangle
              xPos={current.xPos}
              yPos={current.yPos}
              zPos={current.zPos}
              xRot={current.xRot}
              yRot={current.yRot}
              zRot={current.zRot}
              key={current.key}
            >
              {current.children}
            </Rectangle>
          );
        })
      }
    </div>
  );
};
