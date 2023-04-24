import { ReactNode } from 'react';

interface RectangleShapeProps {
  xPos: number;
  yPos: number;
  zPos: number;
  xRot: number;
  yRot: number;
  zRot: number;
  id: number;
  children: ReactNode;
}

export const RectangleShape = ({ xPos, yPos, zPos, xRot, yRot, zRot, id, children }: RectangleShapeProps) => {

  return (
    <div
      className="overflow-hidden"
      style={{
        position: 'absolute',
        left: xPos,
        top: yPos,
        zIndex: zPos,
        transform: `rotateX(${xRot}) rotateY(${yRot}) rotateZ(${zRot})`,
      }}
      key={id}
    >
      {children}
    </div>
  );
};
