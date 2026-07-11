import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((previousCount) => previousCount + 1);
  }

  function decreaseCount() {
    setCount((previousCount) => previousCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  function increaseThreeTimes() {
  setCount((previousCount) => previousCount + 1);
  setCount((previousCount) => previousCount + 1);
  setCount((previousCount) => previousCount + 1);
}

  return (
    <section className="state-card">
      <h2>Sayaç</h2>
      <p className="state-value">{count}</p>

      <div className="button-group">
        <button onClick={increaseThreeTimes}>3 Artır</button>
        <button onClick={decreaseCount}>Azalt</button>
        <button onClick={resetCount}>Sıfırla</button>
        <button onClick={increaseCount}>Artır</button>
      </div>
    </section>
  );
}

export default Counter;