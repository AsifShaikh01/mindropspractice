import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
      };
  return (
    <div>
      <p>Counter</p>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
