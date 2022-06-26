import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <ClickCounter />
      </Container>
    );
  }
}
