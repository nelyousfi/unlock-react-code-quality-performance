import React, { useEffect, useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const Child = ({ a }) => {
  // the same applies for useCallback, useMemo and memo.
  useEffect(() => {
    console.log("oops", a);
  }, [a]);

  return null;
};

export default () => {
  const [count, setCount] = useState(0);

  // const a = 1;
  const a = {};

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child a={a} />
      <HeavyMemoizedComponent a={a} />
    </>
  );
};

const HeavyMemoizedComponent = React.memo(({ a }) => {
  useEffect(() => {
    console.log("HeavyMemoizedComponent", a);
  }, [a]);

  return <HeavyComponent />;
});
