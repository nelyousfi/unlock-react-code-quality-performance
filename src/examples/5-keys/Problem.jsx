import { useEffect, useState } from "react";

const Child = ({ color }) => {
  useEffect(() => {
    console.log("Child mounted");

    return () => {
      console.log("Child unmounted");
    };
  }, []);
  return <div style={{ color }}>{color}</div>;
};

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count % 2 === 0 ? <Child color="red" /> : <Child color="blue" />}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};
