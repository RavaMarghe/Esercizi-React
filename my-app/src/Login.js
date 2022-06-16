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

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
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
      </form>
    );
  }
}
