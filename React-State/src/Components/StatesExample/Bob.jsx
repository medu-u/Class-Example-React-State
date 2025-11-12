import { Component } from 'react';

class Bob extends Component {
  render() {
    return (
      <div className='component-info'>
        <h3 className='small-title'> This is Bob Component</h3>
        <div className=''>{this.props.text}</div>
      </div>
    );
  }
}

export default Bob;
