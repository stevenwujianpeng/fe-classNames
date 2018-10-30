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
const isValidIdentifier = (identifier) => {
  if (typeof identifier !== 'string') return false;

  const prefix = identifier.substr(0, 1);
  const numberStartRegx = /^[0-9]/;

  return !numberStartRegx.test(prefix);
}

export { isValidIdentifier };
