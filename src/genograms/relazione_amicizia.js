import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const mult = 4;

  const voidRect = new fabric.Rect({
    originX: "left",
    originY: "top",
    width: grid * mult,
    height: grid,
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
    [0, grid / 2 - spacing, grid * mult, grid / 2 - spacing],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center",
      strokeDashArray: [5, 5]
    }
  );

  const line2 = new fabric.Line(
    [0, grid / 2 + spacing, grid * mult, grid / 2 + spacing],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center",
      strokeDashArray: [5, 5]
    }
  );

  return new Genogram(
    [voidRect, line1, line2],
    grid,
    [true], [true],
    {
      mt: false, // middle top disable
      mb: false, // midle bottom
      br: false,
      bl: false,
      tl: false,
      tr: false,
      ml: true, // middle left
      mr: true // I think you get it
    },
    {
      left: -offsetX + (w - grid) * 0.5,
      top: -offsetY + (h - grid) * 0.5
    }
  );

}

export default getGenogram;
