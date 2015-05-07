var defaultLib = {};

defaultLib.getGlobal = require('./utils/getGlobal');
defaultLib.typesDetection = require('./utils/typesDetection');

defaultLib.getObjectKeys = require('./utils/objects/getObjectKeys');
defaultLib.getObjectLength = require('./utils/objects/getObjectLength');
defaultLib.getObjectSafely = require('./utils/objects/getObjectSafely');
defaultLib.getObjectFiled = require('./utils/objects/getObjectFiled');

defaultLib.cycleKeys = require('./utils/cycle/cycleKeys');
defaultLib.cycle = require('./utils/cycle/cycle');
defaultLib.reversiveCycle = require('./utils/cycle/reversiveCycle');

defaultLib.customEvents = require('./modules/customEvents');

defaultLib.onload = require('./utils/onload');

module.exports = defaultLib;