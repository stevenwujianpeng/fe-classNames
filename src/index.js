import {isValidIdentifier} from "./util/identifier";
import {isArray} from './util/array';

const classNames = (...args) => {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];

    if (!arg) continue;
    if (classes.indexOf(arg) > -1) continue;

    let argType = typeof arg;

    if (argType === 'string' && isValidIdentifier(arg)) {
      classes.push(arg);
    } else if (isArray(arg)) {
      let inner = classNames(...arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (let key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key] && classes.indexOf(key) === -1) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
};

export default classNames;
