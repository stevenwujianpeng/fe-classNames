import 'babel-polyfill'
import chai from 'chai';
import {isValidIdentifier} from "../src/util/identifier";

let expect = chai.expect;

describe('判断标识符', () => {
  it('有效的 startWith - _ a-z A-Z', () => {
    expect(isValidIdentifier('name')).to.be.equal(true);
    expect(isValidIdentifier('-name')).to.be.equal(true);
    expect(isValidIdentifier('_name')).to.be.equal(true);
    expect(isValidIdentifier('$name')).to.be.equal(true);
  })

  it('无效的以数字开头的', () => {
    expect(isValidIdentifier('10name')).to.be.equal(false);
  })

  it('无效的输入', () => {
    expect(isValidIdentifier(undefined)).to.be.equal(false);
    expect(isValidIdentifier(null)).to.be.equal(false);
    expect(isValidIdentifier({})).to.be.equal(false);
    expect(isValidIdentifier([])).to.be.equal(false);
    expect(isValidIdentifier(11)).to.be.equal(false);
  })
})
