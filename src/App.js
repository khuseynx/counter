import React, { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Счётчик: {count}</h2>
      <div className="App">
        <button className="plus" onClick={() => setCount(count + 1)}>
          Плюс
        </button>
        <button
          className="minus"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Минус
        </button>
        <button
          className="reset"
          onClick={() => setCount(0)}
          disabled={count === 0}>
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default App;