import { useState } from "react";

let value;

export default () => {
  useState(() => {
    // this called before the first render
    value = "Hello, world!";
  });

  return <>{value}</>;
};
