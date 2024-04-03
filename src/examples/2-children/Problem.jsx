import { useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const ShowCount = ({ count }) => {
  return <p>Count: {count}</p>;
};

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <HeavyComponent />
      <ShowCount count={count} />
    </>
  );
};
