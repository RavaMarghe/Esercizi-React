import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [disable, setDisable] = useState();

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

    setDisable(() => {
      return {
        disable: data.username === "" && data.password === "" ? true : false,
      };
    });
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

    setDisable(() => {
      return {
        disable: false,
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
        <button onClick={handleLogin} disabled={disable}>
          Login
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
}

/*export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  onLogin = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  reset = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };


  render() {
    const WelcomeStyle = {
      backgroundColor: (this.state.password.length >= 8) ? 'green' : 'red'
  }

    return (
      <div>
        <h1>Controlled form</h1>
        <form>
          <div>
            <label>
              Name:
              <input
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <label>
              Remember:
              <input
                name="remember"
                type="checkbox"
                checked={this.state.remember}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <button onClick={this.onLogin} style={WelcomeStyle}>Login</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}*/
