import { Interactable } from '../../interactable/Interactable';

export interface CanvasElementProps extends Interactable {
  x: number;
  y: number;
  z: number;
}
