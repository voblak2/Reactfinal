import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, replace, onCount, } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
        count={this.props.count} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        clickCount={this.props.clickCount} 
        resetNumber={this.props.resetNumber}
        inputNumber={this.props.inputNumber}
        onCount={this.props.onCount} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onCount: () => dispatch(onCount()),
    inputNumber: (count) => dispatch(replace(count)),
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      resetNumber: state.resetNumber,
      clickCount: state.clickCount,
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);