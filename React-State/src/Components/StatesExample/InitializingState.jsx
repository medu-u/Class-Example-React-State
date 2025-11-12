import { Component } from 'react';

class InitializingState extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Abebe',
      bootCamp: 'Evangadi',
      group: 1,
    };
  }

  // // OR But not recommended
  // state = {
  //   name: 'Abebe',
  //   bootCamp: 'Evangadi',
  //   group: 1,
  // };

  render() {
    return (
      <div className='component-wrapper'>
        <div className='component-card'>
          <h2 className='component-title'>State Initialization Example</h2>
          <div className='component-display'>- {this.state.name}</div>
          <div className='component-display'>- Group {this.state.group}</div>
          <div className='component-display'>- {this.state.bootCamp}</div>
        </div>
      </div>
    );
  }
}

export default InitializingState;
