import React from "react";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FilteredList } from "./FilteredList";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export function App() {
  return (
    <Container title="Esercizi react">
      <hr />
      <FilteredList />
      <hr />
      <Counter />
    </Container>
  );
}
