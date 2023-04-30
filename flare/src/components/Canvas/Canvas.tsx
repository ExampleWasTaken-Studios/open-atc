import { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { CanvasElementProps } from './CanvasElement';

export interface CanvasProps {
  className?: string; // TODO: remove once background handling is implemented
  children: ReactElement<CanvasElementProps>[];
}

export const Canvas = ({ className, children }: CanvasProps) => {

  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [sceneRect, setSceneRect] = useState<DOMRect>(null);

  useEffect(() => {
    if (sceneRef.current) {
      const scene = canvasRef.current.parentElement as HTMLDivElement;
      setSceneRect(scene.getBoundingClientRect());
    }
  }, []);

  const onMouseMove = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    //
  };

  const onMouseDown = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    //
  };

  const onMouseUp = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    //
  };

  return (
    <div
      ref={canvasRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
};
