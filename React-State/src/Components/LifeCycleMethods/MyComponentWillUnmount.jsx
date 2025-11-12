import React, { Component } from 'react';
import LoggedInPage from './LoggedInPage';
import LoggedOutPage from './LoggedOutPage';

class MyComponentWillUnmount extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  changeStatus = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <div className='component-wrapper'>
          <div className='component-card'>
            <h2 className='component-title'>
              Lifecycle: Component Will Unmount
            </h2>
            <button
              className={`component-button ${
                this.state.show ? 'logout-button' : 'login-button'
              }`}
              onClick={this.changeStatus}
            >
              {this.state.show ? '🚪 Log Out' : '🔐 Log In'}
            </button>
          </div>
        </div>

        <div className='component-wrapper'>
          {this.state.show ? <LoggedInPage /> : <LoggedOutPage />}
        </div>
      </>
    );
  }
}

export default MyComponentWillUnmount;
