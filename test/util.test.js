require("@babel/polyfill");

import {isValidIdentifier} from "../src/util/identifier";

var assert = require('assert');

describe('判断标识符', () => {
  it('有效的 startWith - _ a-z A-Z', () => {
    assert.equal(isValidIdentifier('name'), true);
    assert.equal(isValidIdentifier('-name'), true);
    assert.equal(isValidIdentifier('_name'), true);
    assert.equal(isValidIdentifier('$name'), true);
  })

  it('无效的以数字开头的', () => {
    assert.equal(isValidIdentifier('10name'), false);
  })

  it('无效的输入', () => {
    assert.equal(isValidIdentifier(undefined), false);
    assert.equal(isValidIdentifier(null), false);
    assert.equal(isValidIdentifier({}), false);
    assert.equal(isValidIdentifier([]), false);
    assert.equal(isValidIdentifier(11), false);
  })
})
