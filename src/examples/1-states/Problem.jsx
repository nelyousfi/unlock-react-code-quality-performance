import { useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeavyComponent />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};
