function CycleStopKey () {}
    function CycleStopObject () {
    this.result = null;
}
CycleStopObject.prototype = new CycleStopKey();

module.exports = {
    StopKey: CycleStopKey,
    stopKey: new CycleStopKey(),

    StopObject: CycleStopObject,
    stopObject: new CycleStopObject()
};