import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

/*function onCounterChange(count){
  console.log(`The Counter is now: ${count}`)
}*/

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name={"Marghe"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/userslist" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path="users/:username" element={<ShowGithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>Page not found</h1>
            </div>
          }
        />
      </Routes>
      <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |
      <Link to="/userslist">Github user</Link>
    </div>
  );
}
