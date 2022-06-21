import React from "react";

export class UncontrolledLogin extends React.Component {
  handleSubmitButton = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  render() {
    return (
      <div>
        <h1>Uncontrolled form</h1>
        <form onSubmit={this.handleSubmitButton}>
          <label>
            Username:
            <input name="username" required />
          </label>
          <label>
            Password:
            <input name="password" type="password" required />
          </label>
          <label>
            Remember:
            <input name="remember" type="checkbox" />
          </label>
          <div>
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
