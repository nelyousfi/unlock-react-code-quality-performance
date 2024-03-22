import React, { useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const ShowCount = ({ count }) => {
  return <p>Count: {count}</p>;
};

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
      <ShowCount count={count} />
    </>
  );
};

export default () => {
  return (
    <Counter>
      <HeavyComponent />
    </Counter>
  );
};
