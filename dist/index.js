(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['fe-classNames'] = factory());
}(this, (function () { 'use strict';

/**
 * 判断标识符是否有效
 *
 * @Note:
 * In CSS, identifiers (including element names, classes, and IDs in selectors) can contain only the characters [a-zA-Z0-9]
 * and ISO 10646 characters U+00A0 and higher, plus the hyphen (-) and the underscore (_);
 * they cannot start with a digit, two hyphens, or a hyphen followed by a digit.
 * Identifiers can also contain escaped characters and any ISO 10646 character as a numeric code (see next item).
 * For instance, the identifier “B&W?” may be written as “B\&W\?” or “B\26 W\3F”.
 * */
var isValidIdentifier = function isValidIdentifier(identifier) {
  if (typeof identifier !== 'string') return false;

  var prefix = identifier.substr(0, 1);
  var numberStartRegx = /^[0-9]/;

  return !numberStartRegx.test(prefix);
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};























































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var classNames = function classNames() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var classes = [];

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];

    if (!arg) continue;
    if (classes.indexOf(arg) > -1) continue;

    var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

    if (argType === 'string' && isValidIdentifier(arg)) {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      var inner = classNames.apply(undefined, toConsumableArray(arg));

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key] && classes.indexOf(key) === -1) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
};

return classNames;

})));
