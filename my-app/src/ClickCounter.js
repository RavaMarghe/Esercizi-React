import React from "react";

export class ClickCounter extends React.Component {

    state = {
        count: this.props.initialValue,
    };

    handleIncrementButton = (event) => {
        console.log(event)

        this.setState(() => {
            return {
                count: this.state.count + this.props.incrementBy,
            };
        })
    }

  render() {
    return <>
    <button onClick={this.handleIncrementButton}>Increment</button>
    <h1>Button counter: {this.state.count}</h1>
    </>;
  };
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
  };
  