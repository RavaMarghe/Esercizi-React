import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <Welcome name="Marghe" age={23} />
      </Container>
    );
  }
}
