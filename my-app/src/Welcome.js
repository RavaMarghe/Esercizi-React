import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <p>Welcome, <strong>{this.props.name}</strong>!</p>
                {!!this.props.age && <Age age={this.props.age}/>} 
            </div>
        )
    }
}

// if no name prop is passed to the Welcome component, it will be rendered whitout the name (Welcome, !)
Welcome.defaultProps = {
    name: 'Margherita',
    age: 23
}