import { ReactNode } from 'react';

export interface RectangleProps {
  xPos: number;
  yPos: number;
  zPos: number;
  xRot: number;
  yRot: number;
  zRot: number;
  key: number;
  children: ReactNode;
}

export const Rectangle = ({ xPos, yPos, zPos, xRot, yRot, zRot, key, children }: RectangleProps) => {

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
      key={key}
    >
      {children}
    </div>
  );
};
