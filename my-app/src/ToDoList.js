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
      items: state.items.filter((item) => item !== prevSiblings),
    }));
  };

  render() {
    return (
      <div onClick={this.handleRemoveButton}>
        <h1>To do list</h1>
        <input
          name="newItem"
          onChange={this.handleInputChange}
          value={this.state.newItem}
        />
        <button onClick={this.handlePushButton}>Add a new item</button>
        <button onClick={this.handleResetList}>Reset</button>

        {this.props.render(this.state.items)}
      </div>
    );
  }
}
