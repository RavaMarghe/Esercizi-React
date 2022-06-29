import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    console.log(data);
  }

  function handleReset(event) {
    event.preventDefault();
    setData((data) => {
      return {
        ...data,
        username: "",
        password: "",
        remember: false,
      };
    });

  }

  return (
    <form>
      <div>
        <input
          onChange={handleInputChange}
          name="username"
          value={data.username}
        />
        <input
          onChange={handleInputChange}
          name="password"
          type="password"
          value={data.password}
        />
        <input
          onChange={handleInputChange}
          name="remember"
          type="checkbox"
          checked={data.remember}
        />
      </div>
      <div>
        <button onClick={handleLogin} disabled={!data.username || !data.password}>
          Login
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
}
