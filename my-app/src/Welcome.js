import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome, <strong>{this.props.name}</strong>!</h1>
                 {this.props.age && <Age age={this.props.age}/>}
            </div>
        )
    }
} 