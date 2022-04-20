import Genogram from '../genogram';
import figlio from './figlio'

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

  const circle = new fabric.Circle({
    fill: props.lineColor,
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center",
    radius: grid / 4,
    top: grid - grid / 4,
    left: grid - grid / 2
  });

  const figlioGenogram = figlio(w, h, offsetX, offsetY, grid, props);


  return [figlioGenogram, new Genogram([voidRect, circle], grid, [true], [true], null, {
    left: -offsetX + (w - grid) * 0.5,
    top: figlioGenogram.top + grid * 1.5
  })];

}

export default getGenogram;
