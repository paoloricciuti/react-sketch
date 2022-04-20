import Genogram from '../genogram';
const getGenogram = (w, h, offsetX, offsetY, grid, props) => {

  const mult = 4;

  const voidRect = new fabric.Rect({
    originX: "left",
    originY: "top",
    width: grid * mult,
    height: grid,
    fill: "transparent",
    transparentCorners: false,
    selectable: true,
    evented: true,
    strokeUniform: true,
    noScaleCache: false,
    angle: 0
  });

  const group = [voidRect];

  const spikes = 2;
  const spacing = 6;

  for (let i = 0; i < spikes * mult; i++) {
    group.push(
      new fabric.Line(
        [
          i * (grid / spikes),
          grid - spacing,
          i * (grid / spikes) + grid / spikes / 2,
          spacing
        ],
        {
          stroke: props.lineColor,
          strokeWidth: props.lineWidth,
          originX: "center",
          originY: "center"
        }
      )
    );
    group.push(
      new fabric.Line(
        [
          i * (grid / spikes) + grid / spikes / 2,
          spacing,
          (i + 1) * (grid / spikes),
          grid - spacing
        ],
        {
          stroke: props.lineColor,
          strokeWidth: props.lineWidth,
          originX: "center",
          originY: "center"
        }
      )
    );
  }

  return new Genogram(
    group,
    grid,
    [true], [true],
    {
      mt: false, // middle top disable
      mb: false, // midle bottom
      br: false,
      bl: false,
      tl: false,
      tr: false,
      ml: true, // middle left
      mr: true // I think you get it
    },
    {
      left: -offsetX + (w - grid) * 0.5,
      top: -offsetY + (h - grid) * 0.5
    }
  );

}

export default getGenogram;
