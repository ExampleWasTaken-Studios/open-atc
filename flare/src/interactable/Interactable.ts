import { MouseEvent } from 'react';

export interface Interactable {
  onMouseMove?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  onMouseUp?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  onMouseDown?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
}
