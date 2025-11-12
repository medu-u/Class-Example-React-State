import { Component } from 'react';

class NormalVariables extends Component {
  render() {
    let x = 100;

    const increment = () => {
      x = x + 1;
      console.log(x);
    };

    return (
      <div className='component-wrapper'>
        <div className='component-card'>
          <h2 className='component-title'>React Variable Limitation</h2>
          <p className='component-description'>
            Normal variables <strong>do not</strong> trigger re-rendering in
            React.
          </p>
          <div className='component-display'>{x}</div>
          <button
            className='component-button default-button'
            onClick={increment}
          >
            ➕ Add 1
          </button>

          <div className='component-info'>
            The value updates in console, but UI stays static.
          </div>
        </div>
      </div>
    );
  }
}

export default NormalVariables;
