import { useState } from "react";

const useCounter = (inti = 0) => {
  const [count, setCount] = useState(inti);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

export default useCounter;
