import React from "react";

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <p>Welcome, <strong>{this.props.name}</strong>!</p>
                <p>Your age is {this.props.age}!</p>
            </div>
        )
    }
}

// if no name prop is passed to the Welcome component, it will be rendered whitout the name (Welcome, !)
Welcome.defaultProps = {
    name: 'Margherita'
}