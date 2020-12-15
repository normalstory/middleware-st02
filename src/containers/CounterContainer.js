import React, { useCallback } from "react";
import Counter from "../components/Counter";
// import { increase, decrease } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter"; // redux-thunk를 위한 디스패치
//by hooks
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatcher = useDispatch();
  const callbackIncrease = useCallback(() => dispatcher(increaseAsync()), [
    dispatcher,
  ]);
  const callbackDecrease = useCallback(() => dispatcher(decreaseAsync()), [
    dispatcher,
  ]);
  return (
    <Counter
      number={number}
      increments={callbackIncrease}
      decrements={callbackDecrease}
    />
  );
};

export default CounterContainer;
