(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Thumb.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Thumb.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Thumb);
    global.index = mod.exports;
  }
})(this, function (exports, _Thumb) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Thumb2 = _interopRequireDefault(_Thumb);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Thumb2.default;
});