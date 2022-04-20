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

  let adjustements = 4;

  const line1 = new fabric.Line(
    [grid / 4, adjustements + grid / 4, grid / 4, grid - grid / 4],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center"
    }
  );

  const line2 = new fabric.Line(
    [grid - grid / 4, adjustements + grid / 4, grid - grid / 4, grid - grid / 4],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center"
    }
  );

  const line3 = new fabric.Line(
    [grid / 4, grid - grid / 4, grid - grid / 4, grid - grid / 4],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center"
    }
  );

  const line4 = new fabric.Line(
    [
      grid / 2,
      adjustements * 2,
      grid / 4 - adjustements,
      grid / 4 + adjustements + adjustements
    ],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center"
    }
  );

  const line5 = new fabric.Line(
    [
      grid / 2,
      adjustements * 2,
      grid - grid / 4 + adjustements,
      adjustements + grid / 4 + adjustements
    ],
    {
      stroke: props.lineColor,
      strokeWidth: props.lineWidth,
      originX: "center",
      originY: "center"
    }
  );

  const matrimonioGenogram = matrimonio(w, h, offsetX, offsetY, grid, props);


  return [matrimonioGenogram, new Genogram(
    [voidRect, line1, line2, line3, line4, line5],
    grid,
    [true], 
    [true],
    null,
    {
      left: matrimonioGenogram.left + grid * 2,
      top: matrimonioGenogram.top + grid / 2,
    }
  )];

}

export default getGenogram;
