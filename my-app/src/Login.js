import React from "react";

export class Login extends React.Component {
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
    })
  }

  render() {
    return (
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
          <button disabled={(this.state.username === "" || this.state.password === "")} onClick={this.onLogin}>Login</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </form>
    );
  }
}
