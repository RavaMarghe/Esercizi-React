import React from "react";

export class ToDoList extends React.Component {
  state = {
    newItem: "",
    items: [],
  };

  handleInputChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handlePushButton = () => {
    this.setState((state) => ({
      items: state.items.concat(this.state.newItem),
      newItem: "",
    }));
  };

  handleResetList = () => {
    this.setState({
      items: [],
    });
  };

  handleRemoveButton = (event) => {
    const prevSiblings = event.target.previousSibling.textContent;
    this.setState((state) => ({
          items: state.items.filter((item) => item !== prevSiblings)
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
            <div>
              <li key={item + index}>{item}</li>
              <button onClick={this.handleRemoveButton}>Remove item</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
