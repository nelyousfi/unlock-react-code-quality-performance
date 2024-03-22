import React, { useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const ShowCount = ({ count }) => {
  return <p>Count: {count}</p>;
};

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeavyComponent />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ShowCount count={count} />
    </>
  );
};
