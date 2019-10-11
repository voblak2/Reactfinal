import React from 'react';
import { inputNumber } from '../actions';

const Counter = ({ 
  count, 
  onDecrement, 
  onIncrement, 
  inputNumber, 
  onCount, 
  resetNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <h4>Times the increment/decrement buttons have been clicked: <span>{count}</span></h4> 
          <input type="number" onChange={
            event => inputNumber(
            event.target.value)} 
          value={resetNumber}></input>
          <button onClick={onCount}>Change Count Number</button>
        </div>
      </div>
    );
}

export default Counter;