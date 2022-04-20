fabric.IText.prototype.initHiddenTextarea = (function (initHiddenTextarea) {
    return function () {
        var result = initHiddenTextarea.apply(this);
        fabric.document.body.removeChild(this.hiddenTextarea);
        this.canvas.wrapperEl.appendChild(this.hiddenTextarea);
        return result;
    };
})(fabric.IText.prototype.initHiddenTextarea);