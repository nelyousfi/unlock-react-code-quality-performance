import React, { useEffect, useMemo, useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const Child = ({ a }) => {
  useEffect(() => {
    console.log("oops", a);
  }, [a]);

  return null;
};

export default () => {
  const [count, setCount] = useState(0);

  const a = useMemo(() => {}, []);

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
