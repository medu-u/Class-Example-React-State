import { Component } from 'react';
import Bob from './Bob';

class PassingPropsToState extends Component {
  // it's a good practice to use constructor for initializing state.
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kebede',
      group: 5,
      batch: props.batchtTitle,
      sampleText: 'Hello World!!!',
    };
  }

  // // // OR But not recommended
  // state = {
  //   name: 'Kebede',
  //   group: 2,
  //   batch: this.props.batchtTitle,
  //   sampleText: 'Hello World!!!',
  // };

  render() {
    return (
      <div className='component-wrapper'>
        <div className='component-card'>
          <h2 className='component-title'>Passing Props to State</h2>
          <div className='component-display'>- {this.state.name}</div>
          <div className='component-display'>- Group {this.state.group}</div>
          <div className='component-display'>- Batch {this.state.batch}</div>
          <Bob text={this.state.sampleText} />
        </div>
      </div>
    );
  }
}

export default PassingPropsToState;
