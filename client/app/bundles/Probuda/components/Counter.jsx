import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';




class Counter extends React.Component {
  
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired,
  };
  
  constructor(props, context) {
    super(props, context);
    
  }
  
  
  
  render() {
    const { data, railsContext, increment, decrement } = this.props;
    const { counter, name } = data;
    return (
      <p>
      {name}'s Counter: {counter}
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
     </p>
    );
  }
}

// Counter.propTypes = {
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   counter: PropTypes.func.isRequired
// };

export default Counter;


