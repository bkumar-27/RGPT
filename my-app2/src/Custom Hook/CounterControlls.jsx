const CounterControls = ({ increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterControls;
