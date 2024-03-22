import { useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const ShowCount = ({ count }) => {
  return <div>{count}</div>;
};

const MidHeavyComponent = ({ count }) => {
  return (
    <>
      <ShowCount count={count} />
      <HeavyComponent />
    </>
  );
};

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <MidHeavyComponent count={count} />
    </>
  );
};
