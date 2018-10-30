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
