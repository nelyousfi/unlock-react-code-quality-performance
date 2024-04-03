import { useEffect } from "react";

let value;

export default () => {
  useEffect(() => {
    value = "Hello, World!";
  }, []);

  return <>{value}</>;
};
