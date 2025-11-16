import React, { Component } from 'react';

class LoggedOutPage extends Component {

  render() {
    return (
      <div className="component-card compact-card">
        <h3 className="small-title">🚪 Please, Log In</h3>
        <div className="component-info">
          You are currently logged out. Click the button above to log in.
        </div>
      </div>
    );
  }
}

export default LoggedOutPage;
