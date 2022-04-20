import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const mult = 1;

  const voidRect = new fabric.Rect({
    originX: "left",
    originY: "top",
    width: grid,
    height: grid,
    fill: "transparent",
    transparentCorners: false,
    selectable: true,
    evented: true,
    strokeUniform: true,
    noScaleCache: false,
    angle: 0
  });

  const line1 = new fabric.Line([0, 0, grid, grid], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center"
  });

  const line2 = new fabric.Line([grid, 0, 0, grid], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center"
  });

  return new Genogram([voidRect, line1, line2],
    grid,
    [true],
    [true],
    null, {
    left: -offsetX + (w - grid) * 0.5,
    top: -offsetY + (h - grid) * 0.5
  });

}

export default getGenogram;
