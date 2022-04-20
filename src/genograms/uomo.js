import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const uomoShape = new fabric.Rect({
    left: -offsetX + (w - grid) * 0.5,
    top: -offsetY + (h - grid) * 0.5,
    originX: "left",
    originY: "top",
    width: grid,
    height: grid,
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

  return new Genogram([uomoShape], grid);

}

export default getGenogram;
