# ClassNames

<html>
<p>
    <a href="#backers" alt="Backers on Open Collective">
        <img src="https://img.shields.io/github/issues/stevenwujianpeng/fe-classNames.svg" />
    </a>
    <a href="#backers" alt="Backers on Open Collective">
        <img src="https://img.shields.io/github/license/stevenwujianpeng/fe-classNames.svg" />
    </a>
</p>
</html>

简化react中的className的操作
> Inspired by [JedWatson/classnames](https://github.com/JedWatson/classnames)

# Feature
- 合并 对象，字符串，数组中的有效类名
- 类名的有效性校验（去掉数字开头的类名）
- 去掉重复的类名

# Install
npm: 
> npm install fe-classnames --save

yarn:
> yarn add fe-classnames

# Usage

```javascript
import classNames from 'fe-classnames';

class ComponentA extends React.Component {
    
    render () {
        const cls = classNames('btn', {
            'online': true,
            'offLine': false,
        }, ['btn-active'])

        <div className={cls}>例子</div>
        // Output: <div className="btn online btn-active">例子</div>
    }
}
```

# Test Coverage

```
 PASS  test/index.test.js
  classNames
    ✓ 所有数据类型 (5ms)
    ✓ 去重
    ✓ React (1ms)

 PASS  test/util.test.js
  判断标识符
    ✓ 有效的 startWith - _ a-z A-Z (4ms)
    ✓ 无效的以数字开头的 (1ms)
    ✓ 无效的输入 (2ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |    95.24 |      100 |      100 |                   |
 index.js |      100 |    94.74 |      100 |      100 |                19 |
 identifier.js  |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total

```

