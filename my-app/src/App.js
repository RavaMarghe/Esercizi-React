import React from "react";
import { Container } from "./Container";
import { GithubUserList } from "./GithubUserList";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <GithubUserList />
      </Container>
    );
  }
}
