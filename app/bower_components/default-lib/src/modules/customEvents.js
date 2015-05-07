var cycleKeys = require('../utils/cycle/cycleKeys');
var cycle = require('../utils/cycle/cycle');
var targets = [];
var targetsEvents = [];

/**
 *
 * @param {Object} eventData
 * @param {Function} handler
 * @param {*} ctx
 * @param {*} data
 */
function addEvent (eventData, handler, ctx, data) {
    eventData.handlersData.push(handler, ctx, data);
}

/**
 *
 * @param {Object} eventData
 * @param {Function} handler
 * @param {*} ctx
 * @param {Number} targetIndex
 * @param {String} eventName
 */
function removeHandlerEvent (eventData, handler, ctx, targetIndex, eventName) {
    var handlersData = eventData.handlersData;
    //find and remove handler
    cycle(
        handlersData,
        detectAndRemoveHandler,
        {
            handler: handler,
            ctx: ctx
        },
        null,
        3
    );
    //check data for removing
    if (handlersData.length === 0) {
        removeEvent(targetIndex, eventName);
    }
}

/**
 *
 * @param {Number} targetIndex
 * @param {String} eventName
 */
function removeEvent (targetIndex, eventName) {
    var targetEvents = targetsEvents[targetIndex];
    if (targetEvents[eventName]) {
        targetEvents[eventName] = null;
        targetEvents._quantity -= 1;
        if (targetEvents._quantity === 0) {
            clearTarget(targetIndex)
        }
    }
}

/**
 *
 * @param {Number} targetIndex
 */
function clearTarget (targetIndex) {
    targets.splice(targetIndex, 1);
    targetsEvents.splice(targetIndex, 1);
}

/**
 *
 * @param {Function} handler
 * @param {Number} index
 * @param {Array} handlersDataList
 * @param {Object} removed
 * @return {exports.stopKey|*}
 */
function detectAndRemoveHandler (handler, index, handlersDataList, removed) {
    if ((handler === removed.handler)
        && (handlersDataList[index + 1] === removed.ctx)) {
        handlersDataList.splice(index, 3);
        return cycleKeys.stopKey;
    }
}

//this === target
/**
 *
 * @param {Function} handler
 * @param {Number} index
 * @param {Array} handlersDataList
 * @param {Array} parameters
 */
function handlersDispatchProcessingIteration (handler, index, handlersDataList, parameters) {
    var data = handlersDataList[index + 2],
        ctx = handlersDataList[index + 1] || this;
    if (parameters){
        if (data) {
            parameters.unshift(data);
            handler.apply(ctx, parameters);
            parameters.shift();
        } else{
            handler.apply(ctx, parameters);
        }
    } else{
        handler.call(ctx, data);
    }
}

/**
 *
 * @param {Function} handler
 * @param {Number} index
 * @param {Array} turn
 * @param {Object} eventData
 */
function turnForAddingProcessingIteration (handler, index, turn, eventData) {
    addEvent(
        eventData,
        handler,
        turn[index + 1],
        turn[index + 2]
    );
}

/**
 *
 * @param {Function} handler
 * @param {Number} index
 * @param {Array} turn
 * @param {Object} turnForRemovingData
 */
function turnForRemovingProcessingIteration (handler, index, turn, turnForRemovingData) {
    removeHandlerEvent(
        turnForRemovingData.eventData,
        handler,
        turn[index + 1],
        turnForRemovingData.targetIndex,
        turnForRemovingData.eventName
    );
}

module.exports = {
    /**
     *
     * @param {*} target
     * @param {String} eventName
     * @param {Function} handler
     * @param {Object|Array} [ctx]
     * @param {*} [data]
     * @returns {*} target
     */
    add: function (target, eventName, handler, ctx, data) {
        var index = targets.indexOf(target),
            targetEvents,
            eventData;

        if (index === -1) {
            index = targets.push(target);
            index -= 1;

            targetEvents = {
                //events size cache: performance optimisation for check remove targetEvents and target
                _quantity: 0
            };
            targetsEvents[index] = targetEvents;
        } else {
            targetEvents = targetsEvents[index];
        }

        eventData = targetEvents[eventName];

        if (eventData) {
            if (eventData.isDispatching) {
                eventData.turnForAdding.push(handler, ctx, data);
            } else {
                addEvent(eventData, handler, ctx, data);
            }
        } else {
            targetEvents[eventName] = {
                isDispatching: false,
                handlersData: [handler, ctx, data],
                turnForAdding: [],
                turnForRemoving: []
            };
            targetEvents._quantity += 1
        }

        return target;

    },

    /**
     *
     * @param {*} target
     * @param {String} eventName
     * @param {Function} handler
     * @param {Object|Array} [ctx]
     * @returns {*} target
     */
    remove: function (target, eventName, handler, ctx) {
        var index = targets.indexOf(target),
            eventData;

        if (index !== -1){
            eventData = targetsEvents[index][eventName];
            if (eventData.isDispatching) {
                eventData.turnForRemoving.push(handler, ctx);
            } else {
                removeHandlerEvent(eventData, handler, ctx, index, eventName);
            }
        }

        return target;
    },

    /**
     *
     * @param {*} target
     * @param {String} eventName
     * @param {*|...} [parameter]
     * @returns {*} target
     */
    dispatch: function (target, eventName, parameter) {
        var index = targets.indexOf(target),
            eventData,
            parameters;

        if (index !== -1) {
            eventData = targetsEvents[index][eventName];
            if (eventData && !eventData.isDispatching) {
                //check parameters
                if (arguments.length !== 2) {
                    parameters = Array.prototype.slice.call(arguments, 2);
                }

                eventData.isDispatching = true;

                cycle(
                    eventData.handlersData,
                    handlersDispatchProcessingIteration,
                    parameters,
                    target,
                    3
                );

                eventData.isDispatching = false;

                if (eventData.turnForAdding.length !== 0) {
                    cycle(
                        eventData.turnForAdding,
                        turnForAddingProcessingIteration,
                        eventData,
                        null,
                        3
                    );
                    eventData.turnForAdding.length = 0;
                }

                if (eventData.turnForRemoving.length !== 0) {
                    cycle(
                        eventData.turnForRemoving,
                        turnForRemovingProcessingIteration,
                        {
                            eventData: eventData,
                            eventName: eventName,
                            targetIndex: index
                        },
                        null,
                        2
                    );
                    eventData.turnForRemoving.length = 0;
                }
            }
        }

        return target;
    },

    /**
     *
     * @param {*} target
     * @param {String} [eventName]
     * @returns {*} target
     */
    removeAll: function (target, eventName) {
        var index = targets.indexOf(target);
        if (index !== -1) {
            if (eventName){
                removeEvent(index, eventName);
            } else {
                clearTarget(index);
            }
        }
        return target;
    }
};

//data structure
//list target objects
//[HTMLElement, ...]
//list events on target by index
//[{
//    click: {
//        isDispatching: false,
//        handlersData: [handler, ctx, data, handler, ctx, data, handler, ctx, data],
//        turnForAdding: [handler, ctx, data],
//        turnForRemoving: [handler, ctx]
//    },
//    change: {
//        isDispatching: false,
//        handlersData: [handler, ctx, data],
//        turnForAdding: [],
//        turnForRemoving: []
//    },
//    //events size cache: performance optimisation for check remove targetEvents and target
//    _quantity: 2
//},...]
