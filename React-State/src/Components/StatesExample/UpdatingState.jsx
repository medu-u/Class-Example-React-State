import { Component } from 'react';


class UpdatingState extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      isEven: 'NO',
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });

    // // if state is dependent on the previous state, use callback function to avoid unexpected behavior (result)
    // //
    // if (this.state.counter % 2 === 0) {
    //   this.setState({ isEven: 'YES' });
    // }
    // if (this.state.counter % 2 !== 0) {
    //   this.setState({ isEven: 'NO' });
    // }

    // // //  Correct way to do it
    this.setState(prevState => {
      if (prevState.counter % 2 === 0) {
        return { isEven: 'YES' };
      } else {
        return { isEven: 'NO' };
      }
    });
    // use call back functions inside setState method to avoid unexpected result.
  };

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1
    }));
  };

  reset = () => {
    this.setState(() => ({ counter: 0, isEven: 'NO' }));
  };

  render() {
    return (
      <div className='component-wrapper'>
        <div className='component-card'>
          <h2 className='component-title'>Updating State</h2>
          <div className='component-display'>{this.state.counter}</div>
          <div className='component-display'>Is even - {this.state.isEven}</div>
          <button
            className='component-button default-button'
            onClick={this.increment}
          >
            ➕ Add 1
          </button>
          <button
            className='component-button default-button'
            onClick={this.decrement}
          >
            ➖ Minus 1
          </button>
          <button
            className='component-button default-button'
            onClick={this.reset}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    );
  }
}

export default UpdatingState;
