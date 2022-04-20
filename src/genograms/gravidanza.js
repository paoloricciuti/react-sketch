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

  const triangle1 = new fabric.Line([grid / 2, grid / 2, grid / 2 - 10, grid], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center"
  });

  const triangle2 = new fabric.Line([grid / 2, grid / 2, grid / 2 + 10, grid], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center"
  });

  const triangle3 = new fabric.Line([grid / 2 - 10, grid, grid / 2 + 10, grid], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center"
  });

  const figlioGenogram = figlio(w, h, offsetX, offsetY, grid, props);

  return [figlioGenogram, new Genogram(
    [voidRect, triangle1, triangle2, triangle3],
    grid,
    [true], [true],
    null,
    {
      left: -offsetX + (w - grid) * 0.5,
      top: figlioGenogram.top + grid * 1.5
    }
  )];

}

export default getGenogram;
