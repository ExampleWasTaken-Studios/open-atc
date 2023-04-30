import React, { ReactNode } from 'react';
import { CanvasElementProps } from '../Canvas/CanvasElement';

export interface RectangleProps extends CanvasElementProps {
  width: number;
  height: number;
  style: 'fill' | 'outline';
  /**
   * CSS color notation
   */
  color: string;
  /**
   * In px
   */
  borderWidth: number;
  children: ReactNode;
}

const internalRectangle = ({ style, color, borderWidth, children, x, y, z, width, height, onMouseMove, onMouseUp, onMouseDown }: RectangleProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        zIndex: z,
        width: width,
        height: height,
        backgroundColor: style === 'fill' ? color : 'transparent',
        borderColor: color,
        borderWidth: borderWidth,
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
};

export const Rectangle = React.memo(internalRectangle);
