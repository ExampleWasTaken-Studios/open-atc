import { RectangleShape } from '../Geometry/RectangleShape';
import { CircleShape } from '../Geometry/CircleShape';
import { Rectangle } from '../../api/geometry/Rectangle';
import { Circle } from '../../api/geometry/Circle';

interface CanvasProps {
  rectangles: Rectangle[];
  circles: Circle[];
  className?: string;
  devMode?: boolean;
}

/**
 * @private
 */
export const Canvas = ({ rectangles, circles, className, devMode }: CanvasProps) => {

  devMode ? className += ' border-red-600 border-2' : null;
  className += ' relative';

  return (
    <div
      className={className}
    >
      {
        rectangles.map(current => {
          return (
            <RectangleShape
              xPos={current.xPos}
              yPos={current.yPos}
              zPos={current.zPos}
              xRot={current.xRot}
              yRot={current.yRot}
              zRot={current.zRot}
              id={current.id}
              key={current.id}
            >
              {current.children}
            </RectangleShape>
          );
        })
      }

      {
        circles.map(current => {
          return (
            <CircleShape
              xPos={current.xPos}
              yPos={current.yPos}
              zPos={current.zPos}
              xRot={current.xRot}
              yRot={current.yRot}
              zRot={current.zRot}
              diameter={current.diameter}
              backgroundColor={current.backgroundColor}
              border={current.border}
              id={current.id}
              key={current.id}
            />
          );
        })
      }
    </div>
  );
};
