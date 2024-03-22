import { createContext, useContext, useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const ShowCount = () => {
  const count = useContext(CountContext);
  return <div>{count}</div>;
};

const MidHeavyComponent = () => {
  return (
    <>
      <ShowCount />
      <HeavyComponent />
    </>
  );
};

const CountContext = createContext(0);

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </CountContext.Provider>
  );
};

export default () => {
  return (
    <CountProvider>
      <MidHeavyComponent />
    </CountProvider>
  );
};
