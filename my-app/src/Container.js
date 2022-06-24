import React from "react";

export class Container extends React.Component {
  render() {
    return <div className="container bg-white border-2 border-red-600">{this.props.children}</div>;
  }
}
