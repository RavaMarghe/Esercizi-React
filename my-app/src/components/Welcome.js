import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div>
      <h1>
        Welcome, <strong>{props.name}</strong>!
      </h1>
      {props.age && <Age age={props.age} />}
    </div>
  );
}

/*export class Welcome extends React.Component {
    render() {
        return(
            <div className="welcome">
                <h1>Welcome, <strong>{this.props.name}</strong>!</h1>
                 {this.props.age && <Age age={this.props.age}/>}
            </div>
        )
    }
}*/
