import 'babel-polyfill'
import chai from 'chai';
import classNames from '../src/index';

let expect = chai.expect;

describe('classNames', () => {
  it('所有数据类型', () => {
    expect(classNames(undefined, null, 'classA', 1, 0, {classB: true}, ['classC'])).to.be.equal('classA classB classC');
  });

  it('去重', () => {
    expect(classNames('a', 'a', {'b': true}, ['c', 'c'])).to.be.equal('a b c');
  });

  it('React', () => {
    expect(classNames({
      btn: true,
      'btn-a': false,
      'btn-b': true,
      'btn-c': 'c',
      'btn-d': 100,
      'btn-e': {},
      'btn-f': [1231],
    })).to.be.equal('btn btn-b btn-c btn-d btn-e btn-f');
  });
});
