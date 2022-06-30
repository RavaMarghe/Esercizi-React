import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name={"Marghe"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Ppage not found</h1>
            </div>
          }
        />
      </Routes>
      <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |
      <Link to="/users/:username">Github user</Link>
    </div>
  );
}
