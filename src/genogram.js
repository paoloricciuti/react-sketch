const fabric = require("fabric").fabric;

export default class Genogram extends fabric.Group {
    constructor(objects, grid, skipFill, skipStroke, controlsVisibility, options) {
        for (let obj of objects) {
            obj.set("strokeUniform", true);
        }
        super(objects, options);
        this.grid = grid / 4;
        this.isGenogram = true;
        this.skipFill = skipFill;
        this.skipStroke = skipStroke;
        this.setControlsVisibility(controlsVisibility);
    }
}
