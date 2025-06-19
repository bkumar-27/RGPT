// import Parent from "./Portals/Parent";

// function App() {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// }

// export default App;
import useCounter from "./Custom Hook/useCounter";
import CounterDisplay from "./Custom Hook/counterDisplay";
import CounterControls from "./Custom Hook/CounterControlls";

const App = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterControls increment={increment} decrement={decrement} />
    </div>
  );
};

export default App;
