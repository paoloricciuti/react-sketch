import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const mult = 2;

  const voidRect = new fabric.Rect({
    originX: "left",
    originY: "top",
    width: grid,
    height: grid * mult,
    fill: "transparent",
    transparentCorners: false,
    selectable: true,
    evented: true,
    strokeUniform: true,
    noScaleCache: false,
    angle: 0
  });

  const spacing = 5;

  const line1 = new fabric.Line(
    [grid / 2 - spacing, 0, grid / 2 - spacing, grid * mult],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center"
    }
  );

  const line2 = new fabric.Line(
    [grid / 2 + spacing, 0, grid / 2 + spacing, grid * mult],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center",
      strokeDashArray: [5, 2]
    }
  );

  return new Genogram(
    [voidRect, line1, line2],
    grid,
    [true], [true],
    {
      mt: true, // middle top disable
      mb: true, // midle bottom
      br: false,
      bl: false,
      tl: false,
      tr: false,
      ml: false, // middle left
      mr: false // I think you get it
    },
    {
      left: -offsetX + (w - grid) * 0.5,
      top: -offsetY + (h - grid) * 0.5
    }
  );

}

export default getGenogram;
