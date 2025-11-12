import React, { Component } from 'react';
class MyComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState(x => ({ counter: x.counter + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, prevProps);
    document.title = 'Hello World';
    const topicElement = document.getElementById('topic');
    if (topicElement) {
      topicElement.innerHTML =
        topicElement.innerHTML === 'Topic just changed using life cycle'
          ? 'Hi class'
          : 'Topic just changed using life cycle';
    }
  }

  render() {
    return (
      <div className='component-wrapper'>
        <div className='component-card'>
          <h2 id='topic' className='component-title'>
            ComponentDidUpdate Example
          </h2>
          <div className='component-display'>{this.state.counter}</div>
          <button
            className='component-button default-button'
            onClick={this.increment}
          >
            ➕ Increment
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponentDidUpdate;
