import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const mult = 5;

  const line1 = new fabric.Line([0, 0, 0, grid], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center",
    strokeDashArray: [5, 5]
  });

  const line2 = new fabric.Line([0, grid, grid * mult, grid], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center",
    strokeDashArray: [5, 5]
  });

  const line3 = new fabric.Line([grid * mult, grid, grid * mult, 0], {
    stroke: props.lineColor,
    strokeWidth: props.lineWidth,
    originX: "center",
    originY: "center",
    strokeDashArray: [5, 5]
  });

  // {
  //   mt: false, // middle top disable
  //   mb: false, // midle bottom
  //   br: false,
  //   bl: false,
  //   tl: false,
  //   tr: false,
  //   ml: true, // middle left
  //   mr: true // I think you get it
  // }

  return new Genogram(
    [line1, line2, line3],
    grid,
    [true, true, true],
    [false, false, false], 
    null,
    {
      left: -offsetX + (w - grid) * 0.5,
      top: -offsetY + (h - grid) * 0.5
    }
  );

}

export default getGenogram;
