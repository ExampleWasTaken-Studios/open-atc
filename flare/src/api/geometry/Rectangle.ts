import { ReactNode } from 'react';

export interface Rectangle {
  xPos: number;
  yPos: number;
  zPos: number;
  xRot: number;
  yRot: number;
  zRot: number;
  children: ReactNode;
  id: number;
}
