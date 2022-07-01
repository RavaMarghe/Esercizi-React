import React from "react";

export class ClickTracker extends React.Component {
    
    state = {
        value: ''
    }

    handlerClick = (event) => {
        this.setState({value: event.target.innerHTML})
    }

    render() {


        return (
            <>
            <button onClick={this.handlerClick}>BUTTON 1</button>
            <button onClick={this.handlerClick}>BUTTON 2</button>
            <button onClick={this.handlerClick}>BUTTON 3</button>
            <h1>Last press button: {this.state.value}</h1>
            </>
        )
    }
}