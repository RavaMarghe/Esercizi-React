import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <hr />
                <Counter />
                <hr />
                <ClickCounter />
                <hr />
                <ClickTracker />
                <hr />
                <InteractiveWelcome />
                <hr />
                <Login />
            </div>
        )
    }
}