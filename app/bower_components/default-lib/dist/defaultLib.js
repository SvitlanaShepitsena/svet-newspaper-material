(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["defaultLib"] = factory();
	else
		root["defaultLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var defaultLib = {};

	defaultLib.getGlobal = __webpack_require__(1);
	defaultLib.typesDetection = __webpack_require__(2);

	defaultLib.getObjectKeys = __webpack_require__(3);
	defaultLib.getObjectLength = __webpack_require__(4);
	defaultLib.getObjectSafely = __webpack_require__(5);
	defaultLib.getObjectFiled = __webpack_require__(6);

	defaultLib.cycleKeys = __webpack_require__(7);
	defaultLib.cycle = __webpack_require__(8);
	defaultLib.reversiveCycle = __webpack_require__(9);

	defaultLib.customEvents = __webpack_require__(10);

	defaultLib.onload = __webpack_require__(11);

	module.exports = defaultLib;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _global = this.global
	    || (function () {
	        return window;
	    } ());

	/**
	 *
	 * @return {Window|Object}
	 */
	module.exports = function () {
	    return _global;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _global = __webpack_require__(1)();
	var typesDetection = {};
	var toString = Object.prototype.toString;

	typesDetection.isArray = Array.isArray || function (verifiable) {
	    return toString.call(verifiable) === '[object Array]';
	};

	typesDetection.isNodesCollection = function (verifiable) {
	    return _global.document
	        && ((verifiable instanceof _global.HTMLCollection)
	            || (verifiable instanceof _global.NodeList));
	};

	var types = ['Object', 'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Boolean'],
	    i = types.length;

	function createTypeDetector (typeName) {
	    return function (verifiable) {
	        return toString.call(verifiable) === '[object ' + typeName + ']';
	    }
	}

	for (; i-- ;){
	    typesDetection['is' + types[i]] = createTypeDetector(types[i]);
	}

	typesDetection.isCollection = function (verifiable) {
	    return typesDetection.isArray(verifiable)
	        || typesDetection.isNodesCollection(verifiable)
	        || typesDetection.isArguments(verifiable);
	};

	module.exports = typesDetection;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var getObjectKeys;
	if (Object.keys) {
	    /**
	     *
	     * @param {Object} object
	     * @return {Array}
	     */
	    getObjectKeys = function (object) {
	        return Object.keys(object);
	    };
	} else {
	    /**
	     *
	     * @param {Object} object
	     * @return {Array}
	     */
	    getObjectKeys = function (object) {
	        var p,
	            keys = [];

	        for (p in object) {
	            if (object.hasOwnProperty(p)) {
	                keys.push(p);
	            }
	        }

	        return keys;
	    };
	}

	module.exports = getObjectKeys;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var getObjectKeys = __webpack_require__(3);

	/**
	 *
	 * @param {Object} object
	 * @return {Number}
	 */
	module.exports = function (object) {
	    return getObjectKeys(object).length;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var typesDetection = __webpack_require__(2);
	var cycleKeys = __webpack_require__(7);
	var cycle = __webpack_require__(8);

	/**
	 *
	 * @param {Object} object
	 * @param {String|...} [property]
	 * @return {Object|null} result
	 */
	module.exports = function (object, property) {
	    cycle(arguments, function (property) {
	        if (!object.hasOwnProperty(property)) {
	            object[property] = {}
	        } else if (!typesDetection.isObject(object[property])) {
	            object = null;
	            return cycleKeys.stopKey;
	        }
	        object = object[property];
	    }, null, null, 1, 1);

	    return object;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * безоасно получить значение сквозь вложенные объекты
	 * @param {Object} object
	 * @param {String|Number|Array} [key] object keys
	 * @returns {*} result || null
	 */
	module.exports = function(object, key){
	    var keyTypeof = typeof key;
	    var i;
	    var iMax;
	    var keysList;
	    var cache;
	    var result;
	    var undefined;

	    if (object){
	        if ((keyTypeof !== 'string')
	            && (keyTypeof !== 'number')){
	            keysList = key;
	            i = 0;
	        } else{
	            keysList = arguments;
	            i = 1;
	        }
	        iMax = keysList.length - 1;
	        for (; i < iMax; i += 1){
	            cache = object[keysList[i]];
	            if (cache === undefined){
	                return null;
	            } else{
	                object = cache;
	            }
	        }
	        result = object[keysList[i]];
	        if (result !== undefined){
	            return result;
	        }
	    }
	    return null;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var getGlobal = __webpack_require__(1);
	var cycleKeys = __webpack_require__(7);
	var typesDetection = __webpack_require__(2);
	var getObjectKeys = __webpack_require__(3);


	/**
	 *
	 * @param {Array|Object|String} cycleable
	 * @param {Function} fn
	 * @param {*} [fnData]
	 * @param {*} [ctx]
	 * @param {Number} [step]
	 * @param {Number} [start]
	 * @returns {*}
	 */
	module.exports = function(cycleable, fn, fnData, ctx, step, start){
	    var i,
	        iMax,
	        propertyName,
	        fnResult,
	        keys,
	        result;
	    if (cycleable){
	        //TODO: [dmitry.makhnev]
	        ctx = ctx || getGlobal();
	        step = step || 1;
	        i = start || 0;
	        if (typesDetection.isString(cycleable)) {
	            for (iMax = cycleable.length; i < iMax; i += step) {
	                fnResult = fn.call(ctx, cycleable.charAt(i), i, cycleable, fnData);
	                if (fnResult instanceof cycleKeys.StopKey) {
	                    break;
	                }
	            }
	        } else if (typesDetection.isCollection(cycleable)) {
	            for (iMax = cycleable.length; i < iMax; i += step) {
	                fnResult = fn.call(ctx, cycleable[i], i, cycleable, fnData);
	                if (fnResult instanceof cycleKeys.StopKey) {
	                    break;
	                }
	            }
	        } else if (typesDetection.isObject(cycleable)){
	            //if simple rules use for in
	            if ((i === 0) && (step === 1)) {
	                for (propertyName in cycleable) {
	                    if (cycleable.hasOwnProperty(propertyName)) {
	                        fnResult = fn.call(ctx, cycleable[propertyName], propertyName, cycleable, fnData);
	                        if (fnResult instanceof cycleKeys.StopKey) {
	                            break;
	                        }
	                    }
	                }
	            } else {
	                keys = getObjectKeys(cycleable);
	                for (iMax = keys.length; i < iMax; i += step) {
	                    propertyName = keys[i];
	                    fnResult = fn.call(ctx, cycleable[propertyName], propertyName, cycleable, fnData);
	                    if (fnResult instanceof cycleKeys.StopKey) {
	                        break;
	                    }
	                }
	            }
	        }
	    }
	    if (fnResult === cycleKeys.stopObject) {
	        result = fnResult.result;
	        fnResult.result = null;
	        return result;
	    }
	    return cycleable;
	};



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getGlobal = __webpack_require__(1);
	var cycleKeys = __webpack_require__(7);
	var typesDetection = __webpack_require__(2);
	var getObjectKeys = __webpack_require__(3);

	/**
	 *
	 * @param {Array|Object|String} cycleable
	 * @param {Function} fn
	 * @param {*} [fnData]
	 * @param {*} [ctx]
	 * @param {Number} [step]
	 * @param {Number} [start]
	 * @returns {Array|Object|String} cycleable
	 */
	module.exports = function (cycleable, fn, fnData, ctx, step, start) {
	    var i,
	        propertyName,
	        fnResult,
	        keys,
	        result;
	    if (cycleable) {
	        //TODO: [dmitry.makhnev] 
	        ctx = ctx || getGlobal();
	        step = step || 1;
	        if (typesDetection.isString(cycleable)) {
	            for (i = start || (cycleable.length - 1); i >= 0; i -= step) {
	                fnResult = fn.call(ctx, cycleable.charAt(i), i, cycleable, fnData);
	                if (fnResult instanceof cycleKeys.StopKey) {
	                    break;
	                }
	            }
	        } else if (typesDetection.isCollection(cycleable)) {
	            for (i = start || (cycleable.length - 1); i >= 0; i -= step) {
	                fnResult = fn.call(ctx, cycleable[i], i, cycleable, fnData);
	                if (fnResult instanceof cycleKeys.StopKey) {
	                    break;
	                }
	            }
	        } else if (typesDetection.isObject(cycleable)) {
	            keys = getObjectKeys(cycleable);
	            for (i = start || (keys.length - 1); i >= 0; i -= step) {
	                propertyName = keys[i];
	                fnResult = fn.call(ctx, cycleable[propertyName], propertyName, cycleable, fnData);
	                if (fnResult instanceof cycleKeys.StopKey) {
	                    break;
	                }
	            }
	        }
	    }
	    if (fnResult === cycleKeys.stopObject) {
	        result = fnResult.result;
	        fnResult.result = null;
	        return result;
	    }
	    return cycleable;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var cycleKeys = __webpack_require__(7);
	var cycle = __webpack_require__(8);
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


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * @param callback
	 */
	module.exports = function (callback) {
	    callback();
	};

/***/ }
/******/ ])
});
;