import classNames from '../src/index';

describe('classNames', () => {
  test('所有数据类型', () => {
    expect(classNames(undefined, null, 'classA', 1, 0, {classB: true}, ['classC'])).toBe('classA classB classC');
  });

  test('去重', () => {
    expect(classNames('a', 'a', {'b': true}, ['c', 'c'])).toBe('a b c');
  });

  test('React', () => {
    expect(classNames({
      btn: true,
      'btn-a': false,
      'btn-b': true,
      'btn-c': 'c',
      'btn-d': 100,
      'btn-e': {},
      'btn-f': [1231],
    })).toBe('btn btn-b btn-c btn-d btn-e btn-f');
  });
});
