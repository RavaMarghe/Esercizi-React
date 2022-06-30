import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name={"Marghe"} />} />
      </Routes>
    </div>
  );
}
