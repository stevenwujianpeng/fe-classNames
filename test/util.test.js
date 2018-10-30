import { isValidIdentifier } from "../src/util";

describe('判断标识符', () => {
  test('有效的 startWith - _ a-z A-Z', () => {
    expect(isValidIdentifier('name')).toBeTruthy();
    expect(isValidIdentifier('-name')).toBeTruthy();
    expect(isValidIdentifier('_name')).toBeTruthy();
    expect(isValidIdentifier('$name')).toBeTruthy();
  })

  test('无效的以数字开头的', () => {
    expect(isValidIdentifier('10name')).toBeFalsy();
  })

  test('无效的输入', () => {
    expect(isValidIdentifier(undefined)).toBeFalsy();
    expect(isValidIdentifier(null)).toBeFalsy();
    expect(isValidIdentifier({})).toBeFalsy();
    expect(isValidIdentifier([])).toBeFalsy();
    expect(isValidIdentifier(11)).toBeFalsy();
  })
})
