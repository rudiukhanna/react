import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Збільшити</button>
      <button onClick={decrementCount}>Зменшити</button>
    </div>
  );
}

export default Counter;
