import { useState, useCallback } from "react";

export function useCounter(initialvalue = 0) {
  const [counter, setCounter] = useState(initialvalue);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const handleReset = useCallback(
    function handleReset() {
      setCounter(initialvalue);
    },
    [initialvalue]
  );

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
