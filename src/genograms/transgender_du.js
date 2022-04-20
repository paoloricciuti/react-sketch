import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const donnaShape = new fabric.Circle({
    originX: "left",
    originY: "top",
    radius: grid / 2,
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    fill: "transparent",
    transparentCorners: false,
    selectable: true,
    evented: true,
    strokeUniform: true,
    noScaleCache: false,
    angle: 0
  });

  const uomoShape = new fabric.Rect({
    left: (grid - grid / Math.sqrt(2)) * 0.5,
    top: (grid - grid / Math.sqrt(2)) * 0.5,
    originX: "left",
    originY: "top",
    width: grid / Math.sqrt(2),
    height: grid / Math.sqrt(2),
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    fill: "transparent",
    transparentCorners: false,
    selectable: true,
    evented: true,
    strokeUniform: true,
    noScaleCache: false,
    angle: 0
  });

  return new Genogram([donnaShape, uomoShape], grid,
    [true, false],
    [false, false],
    null, {
    left: -offsetX + (w - grid) * 0.5,
    top: -offsetY + (h - grid) * 0.5
  });

}

export default getGenogram;
