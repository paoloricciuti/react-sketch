import Genogram from '../genogram';
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

  const text = new fabric.Textbox("?", {
    width: grid,
    height: grid,
    fontSize: grid,
    textAlign: "center",
    fontFamily: "monospace"
  });

  return new Genogram([voidRect, text],
    grid,
    [true], [true],
    null, {
    left: -offsetX + (w - grid) * 0.5,
    top: -offsetY + (h - grid) * 0.5
  });

}

export default getGenogram;
