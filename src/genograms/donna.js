import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const donnaShape = new fabric.Circle({
    left: -offsetX + (w - grid) * 0.5,
    top: -offsetY + (h - grid) * 0.5,
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

  return new Genogram([donnaShape], grid);

}

export default getGenogram;
