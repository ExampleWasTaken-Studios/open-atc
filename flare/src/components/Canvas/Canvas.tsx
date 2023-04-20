export interface Point {
  x: string | number;
  y: string | number;
  z: string | number;
  rotation: string | number;
  width: string | number;
  height: string | number;
  className: string;
  key: number;
}

interface CanvasProps {
  className?: string;
  points: Point[];
  devMode?: boolean;
}

export const Canvas = ({ className, points, devMode }: CanvasProps) => {

  devMode ? className += ' border-red-600 border-4' : null;

  return (
    <div className={className}>
      {/* Draw points on canvas */}
    </div>
  );
};
