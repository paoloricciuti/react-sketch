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

  const line = new fabric.Line([grid / 2, 0, grid / 2, grid * mult], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center"
  });

  return new Genogram(
    [voidRect, line],
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
