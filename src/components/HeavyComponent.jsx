import React from "react";

export const HeavyComponent = () => {
  const now = Date.now();

  console.log("HeavyComponent rendering");

  while (Date.now() < now + 500) {
    // Heavy calculation
  }

  return <div>Heavy Component</div>;
};
