import React from "react";
import { Counter } from "./Counter";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <Counter />
      </Container>
    );
  }
}
