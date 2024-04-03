import {useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const ShowCount = ({ count }) => {
  return <p>Count: {count}</p>;
};

export default () => {
  const [count, setCount] = useState(0);

  const data = {
    countGreaterThanZero: count > 0,
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <MidHeavyComponent data={data} />
      <ShowCount count={count} />
    </>
  );
};

const MidHeavyComponent = ({ data }) => {
  return (
    <>
      {data.countGreaterThanZero && <p>Count is greater than zero</p>}
      <HeavyComponent />
    </>
  );
};
