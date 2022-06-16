import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  handleInputName = (event) => {
    const value = event.target.value;
    this.setState({
      name: value,
    });
  };

  handleResetState = () => {
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleInputName}
          />
        </div>

        <div>
          <button onClick={this.handleResetState}>Reset</button>
        </div>
        
        <Welcome name={this.state.name} />
      </div>
    );
  }
}
