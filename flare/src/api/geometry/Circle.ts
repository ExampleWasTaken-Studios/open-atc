export interface Circle {
  xPos: number;
  yPos: number;
  zPos: number;
  xRot: number;
  yRot: number;
  zRot: number;
  /**
   * Diameter in px
   */
  diameter: number;
  /**
   * HEX color code
   */
  color: string;
  /**
   * CSS background-color notation
   */
  backgroundColor: string;
  /**
   * CSS border notation
   */
  border: string;
  id: number;
}