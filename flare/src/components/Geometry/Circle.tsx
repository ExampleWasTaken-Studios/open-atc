import { CanvasElementProps } from '../Canvas/CanvasElement';
import React, { ReactNode } from 'react';

export interface CircleProps extends CanvasElementProps {
  diameter: number;
  style: 'fill' | 'outline';
  color: string;
  borderWidth: number;
  children: ReactNode;
}

const internalCircle = ({ style, color, borderWidth, children, x, y, z, diameter, onMouseMove, onMouseUp, onMouseDown }: CircleProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        zIndex: z,
        width: diameter,
        height: diameter,
        backgroundColor: style === 'fill' ? color : 'transparent',
        borderColor: color,
        borderWidth: borderWidth,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
};

export const Circle = React.memo(internalCircle);
