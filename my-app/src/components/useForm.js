import { useState } from "react";

export function useForm(initalValue) {
  const [username, setUsername] = useState(initalValue);
  const [password, setPassword] = useState(initalValue);

  function handleUsernameChange(event) {
    setUsername((data) => (data = event.target.value));
  }

  function handlePasswordChange(event) {
    setPassword((data) => (data = event.target.value));
  }

  return {
    username: username,
    password: password,
    onUsernameChange: handleUsernameChange,
    onPasswordChange: handlePasswordChange,
  };
}
