import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUser } from "./GithubUser";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name={"Marghe"} />} />
        <Route path="/counter" element={<Counter  />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
