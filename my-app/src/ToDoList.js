import React from "react";

export class ToDoList extends React.Component {
  state = {
    newItem: "",
    items: [],
  };

  handleInputChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handlePushButton = (event) => {
    event.preventDefault();

    this.setState((state) => ({
      items: state.items.concat(this.state.newItem),
      newItem: "",
    }));
  };

  handleResetList = () => {
    this.setState((state) => ({
      items: [],
    }));
  };

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <input
          name="newItem"
          onChange={this.handleInputChange}
          value={this.state.newItem}
        />
        <button onClick={this.handlePushButton}>Add a new item</button>
        <button onClick={this.handleResetList}>Reset</button>

        <ul>
          {this.state.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
