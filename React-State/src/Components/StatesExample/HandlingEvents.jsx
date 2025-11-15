// Renamed to HandlingEvents.jsx
import { Component } from 'react';

class HandlingEvents extends Component {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
    // this.increment = this.increment.bind(this); //binding to use regular function instead of arrow function
  }

  increment = () => {
    // // 👆 if normal function used instead of arrow function, it requires binding in the constructor function in order to update the state. But if arrow function is used, it auto binds it, so no need to bind it manually.

    console.log('You clicked Add 1');
    console.log(this.state.counter);
  };

  render() {
    return (
      <div className='component-wrapper'>
        <div className='component-card'>
          <h2 className='component-title'>Handling Events</h2>
          <div className='component-display'>{this.state.counter}</div>
          <button
            className='component-button default-button'
            onClick={this.increment}//call method here, use this keyword in this method

          >
            ➕ Add 1
          </button>
          <div className='component-info'>Check console for event logs.</div>
        </div>
      </div>
    );
  }
}

export default HandlingEvents;
