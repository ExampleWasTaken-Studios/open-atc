

interface CircleShapeProps {
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

export const CircleShape = ({ xPos, yPos, zPos, xRot, yRot, zRot, diameter, color, backgroundColor, border, id }: CircleShapeProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: xPos,
        top: yPos,
        zIndex: zPos,
        transform: `rotateX(${xRot}) rotateY(${yRot}) rotateZ(${zRot})`,
        height: diameter,
        width: diameter,
        color: color,
        backgroundColor: backgroundColor,
        border: border,
        borderRadius: '50%',
      }}
      key={id}
    >
    </div>
  );
};
