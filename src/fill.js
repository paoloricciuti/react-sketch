/*eslint no-unused-vars: 0*/

import FabricCanvasTool from './fabrictool'

const fabric = require('fabric').fabric;

class Fill extends FabricCanvasTool {

    configureCanvas(props) {
        let canvas = this._canvas;
        canvas.isDrawingMode = false;
        canvas.selection = false;
        canvas.forEachObject((o) => {
            o.evented = true;
        });
        //Change the cursor to the move grabber
        const svg = `<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="${props.lineColor}"><path id="svg_4" d="m16.56125,12.44l-8.94,-8.94l-1.41,1.41l2.38,2.38l-5.15,5.15c-0.59,0.59 -0.59,1.54 0,2.12l5.5,5.5c0.29,0.29 0.68,0.44 1.06,0.44s0.77,-0.15 1.06,-0.44l5.5,-5.5c0.59,-0.58 0.59,-1.53 0,-2.12zm-11.35,1.06l4.79,-4.79l4.79,4.79l-9.58,0zm13.79,1.5c0,0 -2,2.17 -2,3.5c0,1.1 0.9,2 2,2s2,-0.9 2,-2c0,-1.33 -2,-3.5 -2,-3.5z"/></svg>`;
        const cursor = `url(data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}), auto`;
        canvas.defaultCursor = cursor;
        canvas.hoverCursor = cursor;
        this.lineColor = props.lineColor;
    }

    doMouseDown(o) {
        if (o.target) {
            let canvas = this._canvas;
            let toLoop = o.target._objects;
            if (!toLoop) {
                toLoop = [o.target];
            }
            const toSkip = o.target.skipFill;
            for (let i = 0; i < toLoop.length; i += 1) {
                let obj = toLoop[i];
                if (!(toSkip && toSkip[i]) && obj.type !== "path") {
                    obj.fill = this.lineColor;
                }
            }
            canvas.renderAll();
        }
    }

}

export default Fill;