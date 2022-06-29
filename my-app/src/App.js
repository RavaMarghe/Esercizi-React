import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";

function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <GithubUser username={"RavaMarghe"} />
      </Container>
    );
  }
}
