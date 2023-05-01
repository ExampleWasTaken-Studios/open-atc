import { ReactElement } from 'react';
import { CanvasProps } from '../Canvas/Canvas';

export interface SceneProps {
  className?: string;
  children: ReactElement<CanvasProps>;
}

export const Scene = ({ className, children }: SceneProps) => {
  return (
    <div
      className={className}
      style={{
        position: 'static',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};
