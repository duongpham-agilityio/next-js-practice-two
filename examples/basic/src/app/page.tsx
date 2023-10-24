"use client";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => setCounter((prev) => prev + 1), []);

  return (
    <>
      <p>Count: {counter}</p>
      <button onClick={increase}>Count</button>
    </>
  );
}
