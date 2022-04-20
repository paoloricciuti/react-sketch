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

  const spikes = 4;
  const spacing = 6;

  let finalSpace = (grid / spikes) * 2;
  console.log(finalSpace);

  for (let i = 0; i < spikes * mult; i++) {
    group.push(
      new fabric.Line(
        [
          i * (grid / spikes) - finalSpace,
          grid - spacing,
          i * (grid / spikes) + grid / spikes / 2 - finalSpace,
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
          i * (grid / spikes) + grid / spikes / 2 - finalSpace,
          spacing,
          (i + 1) * (grid / spikes) - finalSpace,
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

  group.push(
    new fabric.Line(
      [
        grid * mult - finalSpace,
        grid - spacing,
        grid * mult - finalSpace / 2,
        grid / 2
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
      [grid * mult - finalSpace / 2, grid / 2, grid * mult, grid / 2],
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
      [grid * mult - finalSpace / 2, grid / 2 - 10, grid * mult, grid / 2],
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
      [grid * mult - finalSpace / 2, grid / 2 + 10, grid * mult, grid / 2],
      {
        stroke: props.lineColor,
        strokeWidth: props.lineWidth,
        originX: "center",
        originY: "center"
      }
    )
  );

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
