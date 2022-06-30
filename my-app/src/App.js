import React from "react";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";
import {Counter} from "./Counter";
import { CarDetails } from "./CarDetails";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export function App() {

  return (
    <Container title="Esercizi react">
      <CarDetails />
      <Counter />
    </Container>
  );
}
