import { useEffect } from "react";

let value;

export default () => {
  useEffect(() => {
    // this called after the first render
    value = "Hello, World!";
  }, []);

  return <>{value}</>;
};
