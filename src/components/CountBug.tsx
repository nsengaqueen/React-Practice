import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const handleDecrement = () => {
    if (count === 0) return;
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const handleReset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>

      <h3>History:</h3>
      {history.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Counter;
