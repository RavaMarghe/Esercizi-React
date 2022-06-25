import React from "react";
import { Container } from "./Container";
import { Sum } from "./Sum";

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <Sum numbers={[3, 5, 8]} />
      </Container>
    );
  }
}
