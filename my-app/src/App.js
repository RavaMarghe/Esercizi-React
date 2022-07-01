import React from "react";
import { GithubUser } from "./GithubUser";

const name = "Margherita"
const hello = <h1>Hello, {name}!</h1>;

export function App() {
  return <div>{hello}</div>;
}
