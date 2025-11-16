import React, { Component } from 'react';

class LoggedInPage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Abebe',
      bootcamp: 'Evangadi',
      group: '1',
    };
  }

  componentWillUnmount() {
    alert('You have successfully logged in.');
  }

  render() {
    return (
      <div className='component-card compact-card'>
        <h3 className='small-title'>✅ Logged In</h3>
        <div className='info-row'>
          <span className='info-label'>👤 Name:</span>
          <span className='info-value'>{this.state.name}</span>
        </div>
        <div className='info-row'>
          <span className='info-label'>🆔 Group:</span>
          <span className='info-value'>{this.state.group}</span>
        </div>
        <div className='info-row'>
          <span className='info-label'>🏫 Bootcamp:</span>
          <span className='info-value'>{this.state.bootcamp}</span>
        </div>
      </div>
    );
  }
}

export default LoggedInPage;
