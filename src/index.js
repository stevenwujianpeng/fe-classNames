import { isValidIdentifier } from "./util";

const classNames = (...args) => {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];

    if (!arg) continue;

    let argType = typeof arg;

    if (argType === 'string' && isValidIdentifier(arg)) {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      let inner = classNames(...arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (let key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  const classSet = new Set(classes);

  return [...classSet].join(' ');
};

export default classNames;
