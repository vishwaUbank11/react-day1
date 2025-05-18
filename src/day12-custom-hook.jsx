import React from 'react';
import useCounter from './hooks/useCounter';

function Day12CustomHook() {
  const { count, increment, decrement, reset } = useCounter(5); // starts at 5

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Custom Counter Hook</h2>
      <h1>{count}</h1>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <button onClick={reset}>🔄</button>
    </div>
  );
}

export default Day12CustomHook;
