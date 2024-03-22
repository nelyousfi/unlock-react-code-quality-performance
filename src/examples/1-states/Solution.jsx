import { useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default () => {
  return (
    <>
      <HeavyComponent />
      <Counter />
    </>
  );
};
