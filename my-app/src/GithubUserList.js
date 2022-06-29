import { useState } from "react";
import { GithubUser } from "./GithubUser";

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
            <GithubUser username={username} />
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
    </>
  );
}
