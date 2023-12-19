import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isCountPositive, setCountPositive] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setCountPositive(true);
    } else {
      setCountPositive(false);
    }
  }, [count]);

  return (
    <>
      <h1>
        Текущие счетчик:
        {' '}
        {isCountPositive ? 'больше 0' : 'меньше 0'}
      </h1>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
      <button type="button" onClick={() => setCount(count < 1 ? 0 : count - 1)}>Decrement</button>
    </>
  );
};
