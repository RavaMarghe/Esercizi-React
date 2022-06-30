import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name={"Marghe"} />} />
        <Route path="/counter" element={<Counter  />} />
      </Routes>
    </div>
  );
}
