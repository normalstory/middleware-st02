import React from "react";

const Counter = ({ number, increments, decrements }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increments}>+1</button>
      <button onClick={decrements}>-1</button>
    </div>
  );
};

export default Counter;
