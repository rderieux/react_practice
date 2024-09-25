import { useState } from "react";

export default function AddButton() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }
  function subtractOne() {
    setCount(count - 1);
  }

  return (
    <>
      <h2>Click to add or subtract the count:</h2>
      <button onClick={addOne}>Count + 1: {count}</button>
      <button onClick={subtractOne}>Count - 1: {count}</button>
    </>
  );
}
