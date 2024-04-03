import { memo, useMemo, useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const ShowCount = ({ count }) => {
  return <p>Count: {count}</p>;
};

export default () => {
  const [count, setCount] = useState(0);

  const countGreaterThanZero = count > 0;

  const data = useMemo(
    () => ({ countGreaterThanZero }),
    [countGreaterThanZero]
  );

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <HeavyMemoizedComponent data={data} />
      <ShowCount count={count} />
    </>
  );
};

const HeavyMemoizedComponent = memo(({ data }) => {
  return (
    <>
      {data.countGreaterThanZero && <p>Count is greater than zero</p>}
      <HeavyComponent />
    </>
  );
});
