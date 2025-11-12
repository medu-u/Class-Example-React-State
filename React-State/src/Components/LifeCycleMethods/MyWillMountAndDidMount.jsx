import React, { Component } from 'react';

class MyWillMountAndDidMount extends Component {
  constructor() {
    super();
    console.log('Constructor: Component is initializing...');
    this.state = {
      randomText: '',
      lifecyclePhase: 'Constructor executed',
    };
  }

  // componentWillMount() {
  //   console.log('componentWillMount: Component is about to mount...');
  //   this.setState({
  //     randomText: 'Preparing to load...',
  //     lifecyclePhase: 'componentWillMount triggered',
  //   });
  // }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted.');
    this.setState({
      randomText: 'Fetching data, please wait...',
      lifecyclePhase: 'componentDidMount triggered',
    });

    // Simulate async data fetching
    setTimeout(() => {
      console.log('Data fetched: Updating state...');
      this.setState({
        randomText: '🎉 Hello World! Data loaded successfully.',
        lifecyclePhase: 'Data fetched after DidMount',
      });
    }, 4000);
  }

  render() {
    console.log('Render: Component is rendering...');
    return (
      <div className='component-wrapper'>
        <div className='component-card'>
          <h2>⚛️ Lifecycle Demo: WillMount & DidMount</h2>
          <p>
            <strong>Lifecycle Phase:</strong> {this.state.lifecyclePhase}
          </p>
          <div>{this.state.randomText}</div>
        </div>
      </div>
    );
  }
}

export default MyWillMountAndDidMount;
