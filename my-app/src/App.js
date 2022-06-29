import React from "react";
import { Container } from "./Container";
import { useCounter } from "./useCounter";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/


export function App () {
  const {counter, onIncrement} = useCounter()

    return (
      <Container title="Esercizi react">
        <button onClick={onIncrement}>{counter}</button>
      </Container>
    );
  }

