import React from "react";
import { GithubUser } from "./GithubUser";

const name = "Margherita";
const hello = <h1>Hello, {name}!</h1>;
function sum(a, b) {
  return `The sum is: ${a + b}`;
}

export function App() {
  return <h2>{sum(3, 7)}</h2>;
}
