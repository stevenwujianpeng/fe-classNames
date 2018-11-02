require("@babel/polyfill");

import classNames from '../src/index';

var assert = require('assert');

describe('classNames', () => {
  it('所有数据类型', () => {
    assert.equal(classNames(undefined, null, 'classA', 1, 0, {classB: true}, ['classC']), 'classA classB classC');
  });

  it('去重', () => {
    assert.equal(classNames('a', 'a', {'b': true}, ['c', 'c']), 'a b c');
  });

  it('React', () => {
    assert.equal(classNames({
      btn: true,
      'btn-a': false,
      'btn-b': true,
      'btn-c': 'c',
      'btn-d': 100,
      'btn-e': {},
      'btn-f': [1231],
    }),'btn btn-b btn-c btn-d btn-e btn-f');
  });
});
