import Genogram from '../genogram';
import matrimonio from "./matrimonio";

const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

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

  const line = new fabric.Line(
    [grid / 4, grid / 4, grid - grid / 4, grid - grid / 4],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center"
    }
  );

  const matrimonioGenogram = matrimonio(w, h, offsetX, offsetY, grid, props);

  return [matrimonioGenogram, new Genogram(
    [voidRect, line],
    grid,
    [true], [true],
    null,
    {
      left: matrimonioGenogram.left + grid * 2,
      top: matrimonioGenogram.top + grid / 2,
    }
  )];

}

export default getGenogram;
