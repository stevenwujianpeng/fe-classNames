'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));

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

var isArray = function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
};

var classNames = function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!arg) continue;
    if (classes.indexOf(arg) > -1) continue;

    var argType = _typeof(arg);

    if (argType === 'string' && isValidIdentifier(arg)) {
      classes.push(arg);
    } else if (isArray(arg)) {
      var inner = classNames.apply(void 0, _toConsumableArray(arg));

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

module.exports = classNames;
