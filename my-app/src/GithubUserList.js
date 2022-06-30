import { useState } from "react";
import { GithubUser } from "./GithubUser";
import {Link, Outlet} from "react-router-dom"

export function GithubUserList() {
  const [newUser, setNewUser] = useState([]);
  const [users, setUsers] = useState([]);

  function handleInputChange(event) {
    setNewUser(event.target.value);
  }

  function handleAddButton() {
    setUsers((users) => users.concat(newUser));
  }

  return (
    <>
      <ul>
        {users.map((username, index) => (
          <li key={username + index}>
            <Link to={`users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
      <label>
          Enter a username: 
        <input
          type="text"
          value={newUser}
          onChange={handleInputChange}
        ></input>
      </label>
      <button onClick={handleAddButton}>Add user</button>
      <Outlet />
    </>
  );
}
