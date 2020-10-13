import React from "react";

export default function useCounter(defaultCounter, min = 0, max) {
  const [counter, setCounter] = React.useState(defaultCounter);
  const decrement = () => setCounter(Math.max(min, counter - 1));
  const increment = () => setCounter(Math.min(counter + 1, max));
  return [counter, { increment, decrement }];
}
