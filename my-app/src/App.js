import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { ToDoList } from "./ToDoList";
import { UncontrolledLogin } from "./UncontrolledLogin";

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <InteractiveWelcome />
        <Hello />
        <hr />
        <Counter />
        <hr />
        <ClickCounter />
        <hr />
        <ClickTracker />
        <hr />
        <Login />
        <hr />
        <UncontrolledLogin />
        <hr />
        <ToDoList
          render={(items, handleRemoveButton) => {
            return (
              <div>
                <ul>
                  {items.map((item, index) => (
                    <div>
                      <li key={item + index}>{item}</li>
                      <button onClick={handleRemoveButton}>Remove item</button>
                    </div>
                  ))}
                </ul>
              </div>
            );
          }}
        ></ToDoList>
      </Container>
    );
  }
}
